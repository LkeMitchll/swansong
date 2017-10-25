import React from 'react'

class Track extends React.Component {
  render() {
    return (
      <li key={this.props.id}>
        <a href={this.props.url}>{this.props.artist} - {this.props.name}</a>
      </li>
    )
  }
}

export default Track
