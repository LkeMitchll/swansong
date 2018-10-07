import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

const Wrapper = styled.div`
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  display: grid;
`

class WeekWrapper extends React.Component {
  render() {
    return <Wrapper>{this.props.children}</Wrapper>
  }
}

WeekWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default WeekWrapper
