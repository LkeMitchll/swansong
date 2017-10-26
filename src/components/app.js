import React from 'react'
import WeeklyChart from './weekly_chart.js'
import RecentTracks from './recent_tracks.js'

class App extends React.Component {
  render() {
    return (
      <section>
        <h1>Swansong</h1>
        <WeeklyChart user='luke--mitchell'/>
        <RecentTracks user='luke--mitchell' limit='20'/>
      </section>
    )
  }
}

export default App
