import * as Epoch from './epoch'
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

function fetchTotals(from, to) {
  return function(dispatch) {
    dispatch(requestTotals(from))
    const getPreviousTracks = axios.get(
      `${process.env.API_URL}/recent_tracks/total/${Epoch.getStartOfLastWeek(
        new Date()
      )}.${Epoch.getEndOfLastWeek(new Date())}`
    )

    const getAlbums = axios.get(
      `${process.env.API_URL}/weekly_album_chart/total/${from}.${to}`
    )
    const getTracks = axios.get(
      `${process.env.API_URL}/recent_tracks/total/${from}.${to}`
    )
    const getArtists = axios.get(
      `${process.env.API_URL}/weekly_artist_chart/total/${from}.${to}`
    )

    axios.all([getPreviousTracks, getAlbums, getTracks, getArtists]).then(
      axios.spread((previousTracks, albums, tracks, artists) => {
        dispatch(
          receiveTotals(from, {
            tracks: { title: 'Tracks', total: tracks.data },
            albums: { title: 'Albums', total: albums.data },
            artists: { title: 'Artists', total: artists.data },
          })
        )
      })
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

export function fetchTotalsIfNeeded(from, to) {
  return (dispatch, getState) => {
    if (shouldFetchTotals(getState(), from)) {
      return dispatch(fetchTotals(from, to))
    }
  }
}
