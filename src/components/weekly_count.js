import React from 'react'
import styles from './weekly_count.css'

class WeeklyCount extends React.Component {
  render() {
    return (
      <strong className={styles.data}>{this.props.total}</strong>
    )
  }
}

export default WeeklyCount
