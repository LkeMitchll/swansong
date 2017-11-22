import React from 'react'
import Wrapper from './wrapper.js'
import WrapperWide from './wrapper_wide.js'
import Header from './header.js'
import LastWeek from './last_week.js'
import ThisWeek from './this_week.js'
import RecentTracks from './recent_tracks.js'
import Footer from './footer.js'
import styles from './app.css'

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Wrapper>
          <Header />
          <LastWeek user='luke--mitchell'/>
          <ThisWeek user='luke--mitchell'/>
        </Wrapper>
        <WrapperWide>
          <RecentTracks user='luke--mitchell' limit='20'/>
        </WrapperWide>
        <Wrapper>
          <Footer />
        </Wrapper>
      </div>
    )
  }
}

export default App
