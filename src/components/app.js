import React from 'react'
import LastWeek from './last_week.js'
import ThisWeek from './this_week.js'
import RecentTracks from './recent_tracks.js'
import Footer from './footer.js'
import styles from './app.css'

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.logo}>Swansong</h1>
          <LastWeek user='luke--mitchell'/>
          <ThisWeek user='luke--mitchell'/>
          <RecentTracks user='luke--mitchell' limit='20'/>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
