import axios from 'axios'

export const SELECT_WEEK = 'SELECT_WEEK'

export function selectWeek(from) {
  return {
    type: SELECT_WEEK,
    from,
  }
}

export const INVALIDATE_WEEK = 'INVALIDATE_WEEK'

export function invalidateWeek(from) {
  return {
    type: INVALIDATE_WEEK,
    from,
  }
}

export const REQUEST_TOTALS = 'REQUEST_TOTALS'

function requestTotals(from) {
  return {
    type: REQUEST_TOTALS,
    from,
  }
}

export const RECEIVE_TOTALS = 'RECEIVE_TOTALS'

function receiveTotals(from, json) {
  return {
    type: RECEIVE_TOTALS,
    from,
    totals: json,
    receivedAt: Date.now(),
  }
}

function fetchTotals(from, to, prevFrom, prevTo) {
  return function(dispatch) {
    dispatch(requestTotals(from))
    const getAlbums = axios.get(
      `${process.env.API_URL}/albums/range?from=${from}&to=${to}`
    )
    const getTracks = axios.get(
      `${process.env.API_URL}/recent/range?from=${from}&to=${to}`
    )
    const getArtists = axios.get(
      `${process.env.API_URL}/artists/range?from=${from}&to=${to}`
    )
    const getPrevAlbums = axios.get(
      `${process.env.API_URL}/albums/range?from=${prevFrom}&to=${prevTo}`
    )
    const getPrevTracks = axios.get(
      `${process.env.API_URL}/recent/range?from=${prevFrom}&to=${prevTo}`
    )
    const getPrevArtists = axios.get(
      `${process.env.API_URL}/artists/range?from=${prevFrom}&to=${prevTo}`
    )

    axios
      .all([
        getAlbums,
        getTracks,
        getArtists,
        getPrevAlbums,
        getPrevTracks,
        getPrevArtists,
      ])
      .then(
        axios.spread(
          (albums, tracks, artists, prevAlbums, prevTracks, prevArtists) => {
            dispatch(
              receiveTotals(from, {
                tracks: { title: 'Tracks', total: tracks.data },
                albums: { title: 'Albums', total: albums.data },
                artists: { title: 'Artists', total: artists.data },
                prevTracks: { title: 'Tracks', total: prevTracks.data },
                prevAlbums: { title: 'Albums', total: prevAlbums.data },
                prevArtists: { title: 'Artists', total: prevArtists.data },
              })
            )
          }
        )
      )
  }
}

function shouldFetchTotals(state, from) {
  const totals = state.totalsByWeek[from]
  if (!totals) {
    return true
  } else if (totals.isFetching) {
    return false
  } else {
    return totals.didInvalidate
  }
}

export function fetchTotalsIfNeeded(from, to, prevFrom, prevTo) {
  return (dispatch, getState) => {
    if (shouldFetchTotals(getState(), from)) {
      return dispatch(fetchTotals(from, to, prevFrom, prevTo))
    }
  }
}
