import React from 'react'
import WeeklyChart from './weekly_chart.js'
import RecentTracks from './recent_tracks.js'

class App extends React.Component {
  render() {
    return (
      <section>
        <WeeklyChart user="luke--mitchell"/>
        <RecentTracks user="luke--mitchell" limit="10"/>
      </section>
    )
  }
}

export default App
