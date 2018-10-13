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

const Text = styled.p`
  margin: 0;
`

class Footer extends React.Component {
  render() {
    return (
      <Wrapper>
        <Text>
          An <Link href="http://interroban.gg">interroban.gg</Link> project.
        </Text>
        <Text>
          <Link href="https://github.com/LkeMitchll/swansong">Source Code</Link>
          .
        </Text>
      </Wrapper>
    )
  }
}

export default Footer
