import React from 'react'
import styled from 'react-emotion'
import ds from '../shared/design_system.js'
import PropTypes from 'prop-types'
import formatDate from '../shared/format_date.js'

const Wrapper = styled.li`
  font-size: ${ds.type.sizes.base};
  margin-bottom: ${ds.spacing.base};
`

const Song = styled.a`
  display: block;
  text-decoration: none;
  color: ${ds.colors.light};

  &:hover {
    text-decoration: underline;
  }
`

const Artist = styled(Song)`
  font-weight: 500;
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
      <Wrapper>
        <Song href={this.props.songURL}>{this.props.name}</Song>
        <Artist href={this.props.artistURL}>{this.props.artist}</Artist>
      </Wrapper>
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
