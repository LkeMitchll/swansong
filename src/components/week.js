import React from 'react'
import PropTypes from 'prop-types'
import WeekWrapper from './week_wrapper.js'
import Count from './count.js'

class Week extends React.Component {
  render() {
    return (
      <WeekWrapper>
        <Count
          total={this.props.totals.tracks.total}
          title={this.props.totals.tracks.title}
          comparison={this.props.totals.prevTracks.total}
        />
        <Count
          total={this.props.totals.albums.total}
          title={this.props.totals.albums.title}
          comparison={this.props.totals.prevAlbums.total}
        />
        <Count
          total={this.props.totals.artists.total}
          title={this.props.totals.artists.title}
          comparison={this.props.totals.prevArtists.total}
        />
      </WeekWrapper>
    )
  }
}

Week.propTypes = {
  totals: PropTypes.object,
  comparators: PropTypes.object,
}

export default Week
