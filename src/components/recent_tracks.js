import React from 'react'
import styled from 'react-emotion'
import { ds } from '../shared/design_system'
import axios from 'axios'
import Wrapper from './wrapper.js'
import Subheading from './subheading.js'
import TableCell from './table_cell.js'
import Track from './track.js'

const Table = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  margin-bottom: ${ds.get('spacing.l')};
`

class RecentTracks extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      nowplaying: [],
      songs: []
    }
  }

  componentDidMount() {
    axios.get(`${process.env.API_URL}/recent_tracks`)
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
        <Wrapper nested>
          <Subheading>Recent Tracks</Subheading>
        </Wrapper>

        <Table>
          <thead>
            <tr>
              <TableCell faded header width="20%">Date (Time)</TableCell>
              <TableCell faded header>Artist</TableCell>
              <TableCell faded header>Track</TableCell>
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
        </Table>
      </div>
    )
  }
}

export default RecentTracks
