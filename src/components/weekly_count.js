import React from 'react'
import styled from 'react-emotion'
import ds from '../shared/design_system'
import PropTypes from 'prop-types'

const Wrapper = styled.h2`
  display: flex;
  flex-direction: column;
  margin: 0;
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

const Phrase = styled.span`
  font-weight: 400;
`

class WeeklyCount extends React.Component {
  initCount(total) {
    if (total < 10) {
      return (
        <Data>
          <Outlined>00</Outlined>
          {total}
        </Data>
      )
    } else if (total < 100) {
      return (
        <Data>
          <Outlined>0</Outlined>
          {total}
        </Data>
      )
    } else {
      return <Data>{total}</Data>
    }
  }
  render() {
    return (
      <Wrapper>
        {this.initCount(this.props.total)}
        <Phrase>{this.props.suffix}</Phrase>
      </Wrapper>
    )
  }
}

WeeklyCount.propTypes = {
  total: PropTypes.number,
  suffix: PropTypes.string,
}

export default WeeklyCount
