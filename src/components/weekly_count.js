import React from 'react'
import PropTypes from 'prop-types'
import styles from './weekly_count.css'

class WeeklyCount extends React.Component {
  render() {
    return (
      <strong className={styles.data}>{this.props.total}</strong>
    )
  }
}

WeeklyCount.propTypes = {
  total: PropTypes.string
}

export default WeeklyCount
