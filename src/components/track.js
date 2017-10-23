import React from 'react'

class Track extends React.Component {
  render() {
    return (
      <li key={this.props.id}>{this.props.artist} - {this.props.name}</li>
    )
  }
}

export default Track
