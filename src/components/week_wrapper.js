import React from 'react'
import PropTypes from 'prop-types'
import ds from '../shared/design_system'
import styled from 'react-emotion'

const Wrapper = styled.div`
  grid-template-columns: 1fr;
  display: grid;

  @media (min-width: ${ds.breakpoints.s}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

class WeekWrapper extends React.Component {
  render() {
    return <Wrapper>{this.props.children}</Wrapper>
  }
}

WeekWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default WeekWrapper
