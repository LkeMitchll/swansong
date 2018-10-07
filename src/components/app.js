import React from 'react'
import styled from 'react-emotion'
import ds from '../shared/design_system'
import Tabs from './tabs.js'
import Wrapper from './wrapper.js'
import RecentTracks from './recent_tracks.js'
import Footer from './footer.js'

const Container = styled.div`
  padding: ${ds.spacing.base} ${ds.spacing.l};
  max-width: 2000px;

  @media (max-width: ${ds.breakpoints.s}) {
    padding: ${ds.spacing.s};
  }
`

class App extends React.Component {
  render() {
    return (
      <Container>
        <Tabs />
        <Wrapper>
          <RecentTracks />
        </Wrapper>
        <Wrapper>
          <Footer />
        </Wrapper>
      </Container>
    )
  }
}

export default App
