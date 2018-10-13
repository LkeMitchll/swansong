import React from 'react'
import { Spring, animated } from 'react-spring'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

const Wrapper = animated(styled.div`
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  display: grid;
`)

class WeekWrapper extends React.Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0, transform: 'translateY(100px)' }}
        to={{ opacity: 1, transform: 'translateY(0)' }}
      >
        {props => <Wrapper style={props}>{this.props.children}</Wrapper>}
      </Spring>
    )
  }
}

WeekWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default WeekWrapper
