import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { ds } from '../shared/design_system.js'

export const Section = styled.section`
  max-width: ${props => props.wide ? 'unset' : ds.get('measure')};
  margin: 0 auto 0 ${props => props.wide ? '0' : '20%'};
  padding: 0 ${props => props.nested ? ds.get('spacing.l') : null};

  @media (max-width: ${ds.bp('s')}) {
    padding: 0;
    margin: 0;
  }
`

class Wrapper extends React.Component {
  render() {
    return (
      <Section wide={this.props.wide}>
        {this.props.children}
      </Section>
    )
  }
}

Wrapper.propTypes = {
  children: PropTypes.element,
  wide: PropTypes.bool,
  nested: PropTypes.bool
}

export default Wrapper
