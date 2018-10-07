import React from 'react'
import styled from 'react-emotion'
import ds from '../shared/design_system'

const Logo = styled.h1`
`

class Header extends React.Component {
  render() {
    return (
      <header>
        <Logo>Swansong</Logo>
      </header>
    )
  }
}

export default Header
