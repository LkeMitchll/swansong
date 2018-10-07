import React from 'react'
import styled from 'react-emotion'
import ds from '../shared/design_system'

const Wrapper = styled.footer`
  font-size: ${ds.type.sizes.base};
  color: ${ds.colors.faded};
`

const Link = styled.a`
  color: ${ds.colors.faded};
`

class Footer extends React.Component {
  render() {
    return (
      <Wrapper>
        <p>
          An <Link href="http://interroban.gg">interroban.gg</Link> project.
        </p>
        <p>
          <Link href="https://github.com/LkeMitchll/swansong">Source Code</Link>
          .
        </p>
      </Wrapper>
    )
  }
}

export default Footer
