import React from 'react'
import styled from 'react-emotion'
import { ds } from '../shared/design_system'
import PropTypes from 'prop-types'

const Heading = styled.h2`
  font-family: ${ds.get('type.fonts.base')};
  font-feature-settings: "smcp" 1;
  font-size: ${ds.fs('base')};
  font-weight: ${ds.get('type.fontWeight.bold')};
  -webkit-font-smoothing: antialiased;
  margin: 0 0 ${ds.get('spacing.base')};
  text-transform: lowercase;

  @media (max-width: ${ds.bp('s')}) {
    font-size: ${ds.fs('s')};
    margin-bottom: ${ds.get('spacing.s')};
  }
`

class Subheading extends React.Component {
  render() {
    return(
      <Heading>
        {this.props.children}
      </Heading>
    )
  }
}

Subheading.propTypes = {
  children: PropTypes.string
}

export default Subheading
