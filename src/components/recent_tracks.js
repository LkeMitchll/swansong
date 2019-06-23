import React from 'react'
import styled from 'react-emotion'
import ds from '../shared/design_system.js'
import axios from 'axios'
import Subheading from './subheading.js'
import Loading from './loading.js'
import Track from './track.js'

const Wrapper = styled.section`
  margin-bottom: ${ds.spacing.l};
`

const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
`

class RecentTracks extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      nowplaying: [],
      songs: [],
      loading: true,
    }
  }

  componentDidMount() {
    axios
      .get(
        `${process.env.API_URL}/recent/total?limit=10`,
      )
      .then(res => {
        const songs = res.data.recenttracks.track.map(obj => obj)

        if (songs[0]['@attr']) {
          this.setState({
            nowplaying: [songs[0]],
            songs: songs.slice(1, songs.length),
          })
        } else {
          this.setState({ songs })
        }
        this.setState({ loading: false })
      })
      .catch(err => {
        window.alert(`Recent Tracks: ${err}`)
      })
  }

  render() {
    const isLoading = this.state.loading

    return (
      <Wrapper>
        <header>
          <Subheading>Recent Tracks (10)</Subheading>
        </header>

        <List>
          {isLoading ? (
            <Loading>Loading...</Loading>
          ) : (
            [
              this.state.nowplaying.map((song, key) => (
                <Track
                  nowplaying="true"
                  key={key}
                  artist={song.artist.name}
                  name={song.name}
                  songURL={song.url}
                  artistURL={song.artist.url}
                />
              )),
              this.state.songs.map((song, key) => (
                <Track
                  key={key}
                  artist={song.artist.name}
                  name={song.name}
                  songURL={song.url}
                  artistURL={song.artist.url}
                  date={song.date.uts}
                />
              )),
            ]
          )}
        </List>
      </Wrapper>
    )
  }
}

export default RecentTracks
