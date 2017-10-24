import React from 'react'
import axios from 'axios'
import Track from './track.js'

class RecentTracks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: []
    };
  }

  componentDidMount() {
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${this.props.user}&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=${this.props.limit}`)
      .then(res => {
        const songs = res.data.recenttracks.track.map(obj => obj)
        this.setState({ songs })
      });
  }

  render() {
    return (
      <div>
        <h2>Recent Tracks</h2>
        <ul>
          {this.state.songs.map(song =>
            <Track id={song.mbid} artist={song.artist["#text"]} name={song.name} />
          )}
        </ul>
      </div>
    );
  }
}

export default RecentTracks
