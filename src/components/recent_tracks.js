import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import urlConstructor from '../shared/url_constructor.js'
import Wrapper from './wrapper.js'
import Subheading from './subheading.js'
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
      <div>
        <Wrapper styleOverride={styles.subheading}>
          <Subheading>Recent Tracks</Subheading>
        </Wrapper>

        <table className={styles.wrapper}>
          <thead>
            <tr>
              <th className={[styles.heading, styles.alignment].join(' ')}>Date (Time)</th>
              <th className={styles.heading}>Artist</th>
              <th className={styles.heading}>Track</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </div>
    )
  }
}

RecentTracks.propTypes = {
  user:PropTypes.string,
  limit: PropTypes.string
}

export default RecentTracks
