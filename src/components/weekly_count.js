import React from 'react'
import styled from 'react-emotion'
import ds from '../shared/design_system'
import PropTypes from 'prop-types'

const Wrapper = styled.span`
  display: flex;
  flex-direction: column;
`

const Data = styled.strong`
  font-family: ${ds.type.fonts.alt};
  font-size: ${ds.type.sizes.alt};
  line-height: 0.42;
`

const Outlined = styled.span`
  -webkit-text-stroke: 2px ${ds.colors.light};
  color: ${ds.colors.dark};
`

const Phrase = styled.span``

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
  suffix: PropTypes.string
}

export default WeeklyCount
