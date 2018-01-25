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
        <p>An <Link>interroban.gg</Link> project</p>
        <p>
          Set in <Link>Tiempos Text</Link> &amp; <Link>Courier Prime</Link>.
          <br/>
          Data from <Link>last.fm</Link>.
          <br/>
          Source code hosted at <Link>GitHub</Link>.
        </p>
      </Wrapper>
    )
  }
}

export default Footer
