import React from 'react'
import axios from 'axios'
import urlConstructor from '../shared/url_constructor.js'
import AlbumCount from './album_count.js'

class WeeklyChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      from: "",
      to: ""
    }
  }

  componentDidMount() {
    axios.get(urlConstructor("user.getweeklychartlist", this.props.user, ''))
      .then(res => {
        const weeks = res.data.weeklychartlist.chart.map(obj => obj)
        const week = weeks[weeks.length - 1]
        this.setState({ from: week["from"] })
        this.setState({ from: week["to"] })
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
                <AlbumCount
                  user={this.props.user}
                  from={this.state.from}
                  to={this.state.to} />
              </td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>
    )
  }
}

export default WeeklyChart
