import React from 'react'
import axios from 'axios'
import urlConstructor from '../shared/url_constructor.js'
import Track from './track.js'
import styles from './recent_tracks.css'

class RecentTracks extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      songs: [
        {
          mbid: '000000',
          artist: {'#text': 'xxxxxxxxx'},
          name: 'xxxxxxxxxxxxxxxxxxxxxxx',
          url: 'http://interroban.gg',
          date: { uts: '0000000' }
        }
      ]
    }
  }

  componentDidMount() {
    axios.get(urlConstructor('user.getrecenttracks', this.props.user, `&limit=${this.props.limit}`))
      .then(res => {
        const songs = res.data.recenttracks.track.map(obj => obj)
        this.setState({ songs })
      })
  }

  render() {
    return (
      <div>
        <h2 className={styles.title}>Recent Tracks</h2>
        <ul className={styles.list}>
          {this.state.songs.map(song =>
            <Track
              id={song.mbid}
              artist={song.artist['#text']}
              name={song.name}
              url={song.url}
              date={song.date.uts} />
          )}
        </ul>
      </div>
    )
  }
}

export default RecentTracks
