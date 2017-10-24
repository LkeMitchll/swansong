import React from 'react'
import axios from 'axios'

class AlbumCount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: "",
    }
  }

  componentDidMount() {
    const base_url = "http://ws.audioscrobbler.com/2.0/"
    axios.get(`${base_url}?method=user.getweeklyalbumchart&user=${this.props.user}&from=${this.props.from}&to=${this.props.to}}&api_key=${process.env.LASTFM_API_KEY}&format=json`)
      .then(res => {
        const albums = res.data.weeklyalbumchart.album.map(obj => obj)
        this.setState({ albums: albums.length })
    })
  }

  render() {
    return (
      <span>{this.state.albums}</span>
    )
  }
}

export default AlbumCount
