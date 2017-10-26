import React from 'react'

class WeeklyCount extends React.Component {
  render() {
    return (
      <strong>{this.props.total}</strong>
    )
  }
}

export default WeeklyCount
