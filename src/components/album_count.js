import React from 'react'
import axios from 'axios'
import urlConstructor from '../shared/url_constructor.js'

class AlbumCount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: "",
    }
  }

  componentDidMount() {
    axios.get(urlConstructor("user.getweeklyalbumchart", this.props.user, `&${this.props.from}&${this.props.to}`))
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
