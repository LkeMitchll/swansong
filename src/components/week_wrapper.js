import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { ds } from '../shared/design_system'

const Wrapper = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 0 ${ds.get('spacing.l')};
  height: 70px;

  @media (max-width: ${ds.bp('s')}) {
    margin-bottom: ${ds.get('spacing.base')};
  }
`

class WeekWrapper extends React.Component {
  render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    )
  }
}

WeekWrapper.propTypes = {
  children: PropTypes.object
}

export default WeekWrapper
