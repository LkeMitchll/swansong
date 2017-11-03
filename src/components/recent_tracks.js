import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import urlConstructor from '../shared/url_constructor.js'
import Track from './track.js'
import styles from './recent_tracks.css'

class RecentTracks extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      nowplaying: [],
      songs: []
    }
  }

  componentDidMount() {
    axios.get(urlConstructor('user.getrecenttracks', this.props.user, `&extended=1&limit=${this.props.limit}`))
      .then(res => {
        const songs = res.data.recenttracks.track.map(obj => obj)

        if (songs[0]['@attr']) {
          this.setState({ nowplaying: [songs[0]], songs: songs.slice(1, songs.length) })
        } else {
          this.setState({ songs })
        }

      })
      .catch(err => { window.alert(`Recent Tracks: ${err}`) })
  }

  render() {
    return (
      <section className={styles.wrapper}>
        <h2 className={styles.title}>Recent Tracks ({this.props.limit})</h2>
        <ul className={styles.list}>
          {this.state.nowplaying.map((song, key) =>
            <Track
              nowplaying="true"
              key={key}
              artist={song.artist.name}
              name={song.name}
              songURL={song.url}
              artistURL={song.artist.url} />
          )}
          {this.state.songs.map((song, key) =>
            <Track
              key={key}
              artist={song.artist.name}
              name={song.name}
              songURL={song.url}
              artistURL={song.artist.url}
              date={song.date.uts} />
          )}
        </ul>
      </section>
    )
  }
}

RecentTracks.propTypes = {
  user:PropTypes.string,
  limit: PropTypes.string
}

export default RecentTracks
