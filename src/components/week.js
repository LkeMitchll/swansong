import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Transition } from 'react-spring'
import WeekWrapper from './week_wrapper.js'
import Count from './count.js'

class Week extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      data: [
        { title: 'Tracks', data: '0' },
        { title: 'Albums', data: '0' },
        { title: 'Artists', data: '0' },
      ],
    }
  }

  getData() {
    const getAlbums = axios.get(
      `${process.env.API_URL}/weekly_album_chart/total/${this.props.from}.${
        this.props.to
      }`
    )
    const getTracks = axios.get(
      `${process.env.API_URL}/recent_tracks/total/${this.props.from}.${
        this.props.to
      }`
    )
    const getArtists = axios.get(
      `${process.env.API_URL}/weekly_artist_chart/total/${this.props.from}.${
        this.props.to
      }`
    )

    axios.all([getAlbums, getTracks, getArtists]).then(
      axios.spread((albums, tracks, artists) => {
        this.setState({
          data: [
            { title: 'Tracks', data: tracks.data },
            { title: 'Albums', data: albums.data },
            { title: 'Artists', data: artists.data },
          ],
          loading: false,
        })
      })
    )
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <WeekWrapper>
        <Transition
          keys={this.state.data.map(item => item.title)}
          from={{ opacity: 0.5 }}
          update={{ opacity: 1 }}
        >
          {this.state.data.map(item => styles => (
            <Count
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

Week.propTypes = {
  from: PropTypes.number,
  to: PropTypes.number,
}

export default Week
