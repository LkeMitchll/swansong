import React from 'react'
import styled from 'react-emotion'
import { ds } from '../shared/design_system'

const Wrapper = styled.footer`
  font-family: ${ds.get('type.fonts.alt')};
  font-size: ${ds.fs('alt')};
  margin-bottom: ${ds.get('spacing.l')};
`

const Link = styled.a`
  color: ${ds.brand('primary')};
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`

class Footer extends React.Component {
  render () {
    return (
      <Wrapper>
        <p>An <Link href="http://interroban.gg">interroban.gg</Link> project.</p>
        <p><Link href="https://github.com/LkeMitchll/swansong">Source Code</Link>.</p>
      </Wrapper>
    )
  }
}

export default Footer
