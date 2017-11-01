import React from 'react'
import PropTypes from 'prop-types'
import styles from './weekly_count.css'

class WeeklyCount extends React.Component {
  render() {
    return (
      <span>
        <strong className={styles.data}>{this.props.total}</strong>
        <span className={styles.part}>{this.props.suffix}</span>
      </span>
    )
  }
}

WeeklyCount.propTypes = {
  total: PropTypes.string,
  suffix: PropTypes.string
}

export default WeeklyCount
