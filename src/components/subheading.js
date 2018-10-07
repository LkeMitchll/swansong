import React from 'react'
import styled from 'react-emotion'
import ds from '../shared/design_system'
import PropTypes from 'prop-types'

const Heading = styled.h2`
  font-weight: 400;
  font-size: ${ds.type.sizes.base};
  color: ${ds.colors.faded};
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
