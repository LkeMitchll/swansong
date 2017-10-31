import React from 'react'
import WeeklyChart from './weekly_chart.js'
import RecentTracks from './recent_tracks.js'
import styles from './app.css'

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.logo}>Swansong</h1>
          <WeeklyChart user='luke--mitchell'/>
          <RecentTracks user='luke--mitchell' limit='20'/>
        </div>
      </div>
    )
  }
}

export default App
