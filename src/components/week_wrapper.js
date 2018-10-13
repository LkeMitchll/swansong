import React from 'react'
import { Spring, animated } from 'react-spring'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import ds from '../shared/design_system.js'

const Wrapper = animated(styled.section`
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  display: grid;
  margin-bottom: ${ds.spacing.l};
`)

class WeekWrapper extends React.Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0, transform: 'translateY(100px)' }}
        to={{ opacity: 1, transform: 'translateY(0)' }}
        delay={300}
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
