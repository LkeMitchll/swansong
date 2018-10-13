import React from 'react'
import { Transition, animated } from 'react-spring'
import styled from 'react-emotion'
import ds from '../shared/design_system'
import PropTypes from 'prop-types'
import CountUp from 'react-countup'

const Wrapper = animated(styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0;
`)

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

const Phrase = styled.span`
  font-weight: 400;
`

class WeeklyCount extends React.Component {
  initCount(total) {
    if (!total) {
      return null
    } else if (total < 10) {
      return (
        <Data>
          <Outlined>00</Outlined>
          <CountUp end={total}>{total}</CountUp>
        </Data>
      )
    } else if (total < 100) {
      return (
        <Data>
          <Outlined>0</Outlined>
          <CountUp end={total}>{total}</CountUp>
        </Data>
      )
    } else {
      return (
        <Data>
          <CountUp end={total}>{total}</CountUp>
        </Data>
      )
    }
  }

  render() {
    return (
      <Wrapper style={this.props.style}>
        {this.initCount(this.props.total)}

        <Transition
          from={{ opacity: 0, transform: 'translateY(20px)' }}
          update={{ opacity: 1, transform: 'translateY(0)' }}
          delay={300}
        >
          {styles => <Phrase style={styles}>{this.props.suffix}</Phrase>}
        </Transition>
      </Wrapper>
    )
  }
}

WeeklyCount.propTypes = {
  style: PropTypes.object,
  total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  suffix: PropTypes.string,
}

export default WeeklyCount
