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

class Count extends React.Component {
  padCount(total) {
    const str = '0'
    const intendedLength = 3
    return str.repeat(intendedLength - String(total).length)
  }

  render() {
    return (
      <Wrapper style={this.props.style}>
        <Data>
          <Outlined>{this.padCount(this.props.total)}</Outlined>
          <CountUp end={Number(this.props.total)} />
        </Data>

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

Count.propTypes = {
  style: PropTypes.object,
  total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  suffix: PropTypes.string,
}

export default Count
