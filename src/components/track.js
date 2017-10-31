import React from 'react'
import PropTypes from 'prop-types'
import formatDate from '../shared/format_date.js'
import styles from './track.css'

class Track extends React.Component {
  render() {
    return (
      <li key={this.props.id}>
        <a className={styles.link} href={this.props.url}>{this.props.artist} - {this.props.name}</a>
        <span className={styles.date}>{formatDate(this.props.date)}</span>
      </li>
    )
  }
}

Track.propTypes = {
  id: PropTypes.number,
  url: PropTypes.string,
  artist: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string
}

export default Track
