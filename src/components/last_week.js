import React from 'react'
import axios from 'axios'
import { Transition, config } from 'react-spring'
import * as Epoch from '../shared/epoch.js'
import WeekWrapper from './week_wrapper.js'
import WeeklyCount from './weekly_count.js'

class LastWeek extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      data: [
        { title: 'Albums', data: '0' },
        { title: 'Tracks', data: '0' },
        { title: 'Artists', data: '0' },
      ],
    }
  }

  componentDidMount() {
    var from = Epoch.getStartOfLastWeek(new Date())
    var to = Epoch.getEndOfLastWeek(new Date())

    const getAlbums = axios.get(
      `${process.env.API_URL}/weekly_album_chart/total/${from}.${to}`
    )
    const getTracks = axios.get(
      `${process.env.API_URL}/recent_tracks/total/${from}.${to}`
    )
    const getArtists = axios.get(
      `${process.env.API_URL}/weekly_artist_chart/total/${from}.${to}`
    )

    axios.all([getAlbums, getTracks, getArtists]).then(
      axios.spread((albums, tracks, artists) => {
        this.setState({
          data: [
            { title: 'Albums', data: albums.data },
            { title: 'Tracks', data: tracks.data },
            { title: 'Artists', data: artists.data },
          ],
          loading: false,
        })
      })
    )
  }

  render() {
    return (
      <WeekWrapper>
        <Transition
          keys={this.state.data.map(item => item.title)}
          from={{ opacity: 0.5 }}
          update={{ opacity: 1 }}
          config={config.wobbly}
        >
          {this.state.data.map(item => styles => (
            <WeeklyCount
              style={styles}
              total={item.data}
              suffix={item.title}
              loading={this.state.loading}
            />
          ))}
        </Transition>
      </WeekWrapper>
    )
  }
}

export default LastWeek
