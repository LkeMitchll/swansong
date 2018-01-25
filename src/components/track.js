import React from 'react'
import styled from 'react-emotion'
import { ds } from '../shared/design_system.js'
import TableCell from './table_cell.js'
import PropTypes from 'prop-types'
import formatDate from '../shared/format_date.js'

const Link = styled.a`
  color: ${ds.brand('primary')};
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`

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
        <TableCell faded>
          <p>{this.state.meta}</p>
        </TableCell>
        <TableCell>
          <Link href={this.props.artistURL}>{this.props.artist}</Link>
        </TableCell>
        <TableCell>
          <Link href={this.props.songURL}>{this.props.name}</Link>
        </TableCell>
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
