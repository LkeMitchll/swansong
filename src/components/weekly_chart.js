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
        <table>
          <tbody>
            <tr>
              <th>Albums</th>
              <th>Tracks</th>
              <th>Artists</th>
            </tr>
            <tr>
              <td>
                <WeeklyCount total={this.state.albums}/>
              </td>
              <td>
                <WeeklyCount total={this.state.tracks}/>
              </td>
              <td>
                <WeeklyCount total={this.state.artists}/>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    )
  }
}

export default WeeklyChart
