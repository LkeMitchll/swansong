import React from 'react'
import styled from 'react-emotion'
import ds from '../shared/design_system'
import Wrapper from './wrapper.js'
import Header from './header.js'
import LastWeek from './last_week.js'
import ThisWeek from './this_week.js'
import RecentTracks from './recent_tracks.js'
import Footer from './footer.js'

const Container = styled.div`
  padding: ${ds.spacing.l};

  @media (max-width: ${ds.breakpoints.s}) {
    padding: ${ds.spacing.s};
  }
`

class App extends React.Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <LastWeek />
        </Wrapper>
        <Wrapper wide>
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
