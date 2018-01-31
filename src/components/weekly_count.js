import React from 'react'
import styled from 'react-emotion'
import { ds } from '../shared/design_system'
import PropTypes from 'prop-types'

const Wrapper = styled.span`
  display: flex;
  align-items: center;
`

const Data = styled.strong`
  font-family: ${ds.get('type.fonts.bold')};
  font-weight: ${ds.get('type.fontWeight.bold')};
  font-size: ${ds.fs('display')};
  font-feature-settings: "onum" 1;
  margin-right: ${ds.get('spacing.s')};

  @media (max-width: ${ds.bp('s')}) {
    font-size: ${ds.fs('base')};
  }
`

const Phrase = styled.span`
  font-family: ${ds.get('type.fonts.base')};
  font-size: ${ds.fs('base')};
  font-weight: ${ds.get('type.fontWeight.base')};
  margin-right: ${ds.get('spacing.s')};
`

class WeeklyCount extends React.Component {
  render() {
    return (
      <Wrapper>
        <Data>{this.props.total}</Data>
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
