import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import ds from '../shared/design_system.js'

export const Section = styled.section`
  margin-bottom: ${ds.spacing.l};
`

class Wrapper extends React.Component {
  render() {
    return <Section wide={this.props.wide}>{this.props.children}</Section>
  }
}

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  wide: PropTypes.bool,
  nested: PropTypes.bool,
}

export default Wrapper
