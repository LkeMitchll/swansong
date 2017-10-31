import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import urlConstructor from '../shared/url_constructor.js'
import WeeklyCount from './weekly_count.js'
import styles from './weekly_chart.css'

class WeeklyChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      albums: 'xxx',
      tracks: 'xxx',
      artists: 'xxx'
    }
  }

  componentDidMount() {
    var _this = this
    axios.get(urlConstructor('user.getweeklychartlist', this.props.user, ''))
      .then(res => {
        var weeks = res.data.weeklychartlist.chart.map(obj => obj)
        var week = weeks[weeks.length - 1]

        const getAlbums = axios.get(urlConstructor('user.getweeklyalbumchart', this.props.user, `&from=${week['from']}&to=${week['to']}`))
        const getTracks = axios.get(urlConstructor('user.getrecenttracks', this.props.user, `&from=${week['from']}&to=${week['to']}`))
        const getArtists = axios.get(urlConstructor('user.getweeklyartistchart', this.props.user, `&from=${week['from']}&to=${week['to']}`))

        axios.all([getAlbums, getTracks, getArtists])
          .then(axios.spread((albums, tracks, artists) => {
            _this.setState({
              albums: albums.data.weeklyalbumchart.album.length.toString(),
              tracks: tracks.data.recenttracks['@attr'].total.toString(),
              artists: artists.data.weeklyartistchart.artist.length.toString()
            })
          }))
      })
  }

  render() {
    return (
      <section className={styles.wrapper}>
        <h2 className={styles.title}>Last Week</h2>
        <p className={styles.content}>
          <WeeklyCount total={this.state.tracks}/>
          <span className={styles.part}> Tracks from </span>
          <WeeklyCount total={this.state.albums}/>
          <span className={styles.part}> Albums and </span>
          <WeeklyCount total={this.state.artists}/>
          <span> Artists.</span>
        </p>
        <a className={styles.link} href={ 'https://www.last.fm/user/' + this.props.user }>More at last.fm</a>
      </section>
    )
  }
}

WeeklyChart.propTypes = {
  user: PropTypes.string
}

export default WeeklyChart
