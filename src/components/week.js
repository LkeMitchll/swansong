import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import ds from '../shared/design_system'
import WeekWrapper from './week_wrapper.js'
import Count from './count.js'
import percentDiff from 'percentage-difference'

const Wrapper = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0;
`

const Phrase = styled.span`
  font-weight: 400;
`

const PositivePercentage = styled.span`
  color: ${ds.colors.positive};

  &::before {
    content: '\\2191';
    margin-right: 0.5rem;
  }
`

const NegativePercentage = styled.span`
  color: ${ds.colors.negative};
`

class Week extends React.Component {
  getPercentage(current, previous) {
    const percentage = percentDiff(previous, current, true)
    return percentage < 0 ? (
      <NegativePercentage>{percentage}%</NegativePercentage>
    ) : (
      <PositivePercentage>{percentage}%</PositivePercentage>
    )
  }

  render() {
    return (
      <WeekWrapper>
        <Wrapper>
          <Count total={this.props.totals.tracks.total} />
          <Phrase>
            {this.props.totals.tracks.title}
            &nbsp;
            {Object.keys(this.props.comparators).length > 0 &&
              this.getPercentage(
                this.props.totals.tracks.total,
                this.props.comparators.tracks.total
              )}
          </Phrase>
        </Wrapper>
        <Wrapper>
          <Count total={this.props.totals.albums.total} />
          <Phrase>
            {this.props.totals.albums.title}
            &nbsp;
            {Object.keys(this.props.comparators).length > 0 &&
              this.getPercentage(
                this.props.totals.albums.total,
                this.props.comparators.albums.total
              )}
          </Phrase>
        </Wrapper>
        <Wrapper>
          <Count total={this.props.totals.artists.total} />
          <Phrase>
            {this.props.totals.artists.title}
            &nbsp;
            {Object.keys(this.props.comparators).length > 0 &&
              this.getPercentage(
                this.props.totals.artists.total,
                this.props.comparators.artists.total
              )}
          </Phrase>
        </Wrapper>
      </WeekWrapper>
    )
  }
}

Week.propTypes = {
  totals: PropTypes.object,
  comparators: PropTypes.object,
}

export default Week
