import React from 'react'
import axios from 'axios'
import * as Epoch from '../shared/epoch.js'
import Loading from './loading.js'
import Subheading from './subheading.js'
import WeekWrapper from './week_wrapper.js'
import WeeklyCount from './weekly_count.js'

class LastWeek extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      albums: '0',
      tracks: '0',
      artists: '0',
      loading: true
    }
  }

  componentDidMount() {
    var from = Epoch.getStartOfLastWeek(new Date)
    var to = Epoch.getEndOfLastWeek(new Date)

    const getAlbums = axios.get(`${process.env.API_URL}/weekly_album_chart/total`)
    const getTracks = axios.get(`${process.env.API_URL}/recent_tracks/total/${from}.${to}`)
    const getArtists = axios.get(`${process.env.API_URL}/weekly_artist_chart/total`)

    axios.all([getAlbums, getTracks, getArtists])
      .then(axios.spread((albums, tracks, artists) => {
        this.setState({
          albums: albums.data,
          tracks: tracks.data,
          artists: artists.data,
          loading: false
        })
      }))
  }

  render() {
    const isLoading = this.state.loading

    return (
      <div>
        <Subheading>Last Week</Subheading>
        <WeekWrapper>
          {isLoading ? (
            <Loading>Loading...</Loading>
          ) : ([
            <WeeklyCount key="tracks" total={this.state.tracks} suffix="Tracks from"/>,
            <WeeklyCount key="albums" total={this.state.albums} suffix="Albums and"/>,
            <WeeklyCount key="artists" total={this.state.artists} suffix="Artists."/>
          ])}
        </WeekWrapper>
      </div>
    )
  }
}

export default LastWeek
