import React from 'react'
import styled from 'react-emotion'
import ds from '../shared/design_system.js'
import PropTypes from 'prop-types'

const Wrapper = styled.li`
  margin-bottom: ${ds.spacing.base};
`

const Song = styled.a`
  font-size: ${ds.type.sizes.base};
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
  nowplaying: PropTypes.string,
}

export default Track
