import React from 'react'
import Tabs from './tabs.js'
import RecentTracks from './recent_tracks.js'
import Footer from './footer.js'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Tabs />
        <RecentTracks />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App
