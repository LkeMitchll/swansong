import React from 'react'
import styled from 'react-emotion'
import { ds } from '../shared/design_system'

const Logo = styled('h1')`
  color: ${ds.brand('primary')};
  font-family: ${ds.get('type.fonts.bold')};
  font-size: ${ds.fs('base')};
  font-weight: ${ds.get('type.fontWeight.bold')};
  margin-bottom: ${ds.get('spacing.l')};

  @media (max-width: ${ds.bp('s')}) {
    font-size: ${ds.fs('s')};
    margin-bottom: ${ds.get('spacing.base')};
  }
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
