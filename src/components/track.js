import React from 'react'
import PropTypes from 'prop-types'
import formatDate from '../shared/format_date.js'
import styles from './track.css'

class Track extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      meta: ''
    }
  }

  componentDidMount() {
    if (this.props.nowplaying) {
      this.setState({ meta: 'Now Playing' })
    } else {
      this.setState({ meta: formatDate(this.props.date) })
    }
  }

  render() {
    return (
      <tr key={this.props.id}>
        <td className={styles.wrapper}>
          <p className={styles.meta}>{this.state.meta}</p>
        </td>
        <td className={styles.wrapper}>
          <a className={styles.link} href={this.props.artistURL}>{this.props.artist}</a>
        </td>
        <td className={styles.wrapper}>
          <a className={styles.link} href={this.props.songURL}>{this.props.name}</a>
        </td>
      </tr>
    )
  }
}

Track.propTypes = {
  id: PropTypes.number,
  songURL: PropTypes.string,
  artistURL: PropTypes.string,
  artist: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  nowplaying: PropTypes.string
}

export default Track
