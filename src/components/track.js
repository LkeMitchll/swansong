import React from 'react'
import formatDate from '../shared/format_date.js'

class Track extends React.Component {
  render() {
    return (
      <li key={this.props.id}>
        <a href={this.props.url}>{this.props.artist} - {this.props.name}</a>
        <span>{formatDate(this.props.date)}</span>
      </li>
    )
  }
}

export default Track
