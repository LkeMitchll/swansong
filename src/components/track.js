import React from 'react'
import PropTypes from 'prop-types'
import formatDate from '../shared/format_date.js'
import styles from './track.css'

class Track extends React.Component {
  render() {
    return (
      <li key={this.props.id}>
        <p className={styles.wrapper}>
          <a className={styles.link} href={this.props.artistURL}>{this.props.artist}</a>
          <span>&nbsp;&ndash;&nbsp;</span>
          <a className={styles.link} href={this.props.songURL}>{this.props.name}</a>
        </p>
        <p className={styles.date}>{formatDate(this.props.date)}</p>
      </li>
    )
  }
}

Track.propTypes = {
  id: PropTypes.number,
  songURL: PropTypes.string,
  artistURL: PropTypes.string,
  artist: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string
}

export default Track
