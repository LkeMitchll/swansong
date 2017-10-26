import React from 'react'
import axios from 'axios'
import urlConstructor from '../shared/url_constructor.js'
import WeeklyCount from './weekly_count.js'

class WeeklyChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      albums: 'xxx',
      tracks: 'xxx',
      artists: 'xxx'
    }
  }

  async componentDidMount() {
    const getWeek = await axios.get(urlConstructor('user.getweeklychartlist', this.props.user, ''))
    var weeks = getWeek.data.weeklychartlist.chart.map(obj => obj)
    var week = weeks[weeks.length - 1]

    const getAlbums = await axios.get(urlConstructor('user.getweeklyalbumchart', this.props.user, `&from=${week['from']}&to=${week['to']}`))
    const getTracks = await axios.get(urlConstructor('user.getrecenttracks', this.props.user, `&from=${week['from']}&to=${week['to']}`))
    const getArtists = await axios.get(urlConstructor('user.getweeklyartistchart', this.props.user, `&from=${week['from']}&to=${week['to']}`))

    this.setState({
      albums: getAlbums.data.weeklyalbumchart.album.length,
      tracks: getTracks.data.recenttracks['@attr'].total,
      artists: getArtists.data.weeklyartistchart.artist.length
    })
  }

  render() {
    return (
      <section>
        <h2>This Week</h2>
        <p>
          <WeeklyCount total={this.state.tracks}/>
          <span> Tracks from </span>
          <WeeklyCount total={this.state.albums}/>
          <span> Albums and </span>
          <WeeklyCount total={this.state.artists}/>
          <span> Artists.</span>
        </p>
        <a href={ 'https://www.last.fm/user/' + this.props.user }>More</a>
      </section>
    )
  }
}

export default WeeklyChart
