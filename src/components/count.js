import React from 'react'
import styled from 'react-emotion'
import ds from '../shared/design_system'
import { Transition } from 'react-spring'
import PropTypes from 'prop-types'
import percentDiff from 'percentage-difference'
import CountUp from 'react-countup'

const Wrapper = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0;
`

const Phrase = styled.span`
  font-weight: 400;
`

const Data = styled.span`
  font-family: ${ds.type.fonts.alt};
  line-height: 0.8;
  font-size: ${ds.type.sizes.alt};

  @media (min-width: 2000px) {
    font-size: 24rem;
  }
`

const Outlined = styled.span`
  -webkit-text-stroke: 2px ${ds.colors.light};
  color: ${ds.colors.dark};
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

class Count extends React.Component {
  padCount(total) {
    const str = '0'
    const intendedLength = 3
    return str.repeat(intendedLength - String(total).length)
  }

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
      <Wrapper>
        <Transition
          from={{ opacity: 0.5 }}
          enter={{ opacity: 1 }}
          update={{ opacity: 1 }}
          delay={1000}
        >
          {styles => (
            <Data style={styles}>
              <Outlined>{this.padCount(this.props.total)}</Outlined>
              <CountUp end={this.props.total}>{this.props.total}</CountUp>
            </Data>
          )}
        </Transition>
        <Transition
          from={{ opacity: 0, transform: 'translateY(20px)' }}
          update={{ opacity: 1, transform: 'translateY(0)' }}
          enter={{ opacity: 1, transform: 'translateY(0)' }}
          delay={500}
        >
          {styles => (
            <Phrase style={styles}>
              {this.props.title}
              &nbsp;
              <Transition
                from={{ opacity: 0, transform: 'translateY(40px)' }}
                update={{ opacity: 1, transform: 'translateY(0)' }}
                enter={{ opacity: 1, transform: 'translateY(0)' }}
                delay={700}
              >
                {styles => (
                  <span style={styles}>
                    {this.getPercentage(
                      this.props.total,
                      this.props.comparison
                    )}
                  </span>
                )}
              </Transition>
            </Phrase>
          )}
        </Transition>
      </Wrapper>
    )
  }
}

Count.propTypes = {
  total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  comparison: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
}

export default Count
