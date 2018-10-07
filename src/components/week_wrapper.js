import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import ds from '../shared/design_system'

const Wrapper = styled.p`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
}

export default WeekWrapper
