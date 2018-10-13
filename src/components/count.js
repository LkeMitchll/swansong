import React from 'react'
import styled from 'react-emotion'
import ds from '../shared/design_system'
import PropTypes from 'prop-types'
import CountUp from 'react-countup'

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

class Count extends React.Component {
  padCount(total) {
    const str = '0'
    const intendedLength = 3
    return str.repeat(intendedLength - String(total).length)
  }

  render() {
    return (
      <Data>
        <Outlined>{this.padCount(this.props.total)}</Outlined>
        <CountUp end={this.props.total}>{this.props.total}</CountUp>
      </Data>
    )
  }
}

Count.propTypes = {
  style: PropTypes.object,
  total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  suffix: PropTypes.string,
}

export default Count
