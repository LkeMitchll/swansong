import React from 'react'
import styled from 'react-emotion'
import { ds } from '../shared/design_system'

const Wrapper = styled.footer`
  margin-bottom: ${ds.get('spacing.l')};

  @media (max-width: ${ds.bp('s')}) {
    margin-bottom: ${ds.get('spacing.s')};
  }
`

const Text = styled.p`
  font-family: ${ds.get('type.fonts.alt')};
  font-size: ${ds.fs('alt')};
  margin: 0 0 ${ds.get('spacing.s')};

  @media (max-width: ${ds.bp('s')}) {
    font-size: ${ds.fs('s')};
    margin: 0 0 ${ds.get('spacing.xs')};
  }
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
        <Text>An <Link href="http://interroban.gg">interroban.gg</Link> project.</Text>
        <Text><Link href="https://github.com/LkeMitchll/swansong">Source Code</Link>.</Text>
      </Wrapper>
    )
  }
}

export default Footer
