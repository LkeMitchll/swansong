import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import urlConstructor from '../shared/url_constructor.js'
import * as Epoch from '../shared/sunday_epoch'
import Subheading from './subheading.js'
import WeekWrapper from './week_wrapper.js'
import WeeklyCount from './weekly_count.js'

class LastWeek extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      albums: 'xxx',
      tracks: 'xxx',
      artists: 'xxx'
    }
  }

  componentDidMount() {
    var from = Epoch.getStartOfLastWeek(new Date)
    var to = Epoch.getEndOfLastWeek(new Date)

    const getAlbums = axios.get(urlConstructor('user.getweeklyalbumchart', this.props.user, ''))
    const getTracks = axios.get(urlConstructor('user.getrecenttracks', this.props.user, `&from=${from}&to=${to}`))
    const getArtists = axios.get(urlConstructor('user.getweeklyartistchart', this.props.user, ''))

    axios.all([getAlbums, getTracks, getArtists])
      .then(axios.spread((albums, tracks, artists) => {
        this.setState({
          albums: albums.data.weeklyalbumchart.album.length.toString(),
          tracks: tracks.data.recenttracks['@attr'].total.toString(),
          artists: artists.data.weeklyartistchart.artist.length.toString()
        })
      }))
  }

  render() {
    return (
      <div>
        <Subheading>Last Week</Subheading>
        <WeekWrapper>
          <WeeklyCount total={this.state.tracks} suffix="Tracks from"/>
          <WeeklyCount total={this.state.albums} suffix="Albums and"/>
          <WeeklyCount total={this.state.artists} suffix="Artists."/>
        </WeekWrapper>
      </div>
    )
  }
}

LastWeek.propTypes = {
  user: PropTypes.string
}

export default LastWeek
