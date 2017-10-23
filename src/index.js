import React from 'react'
import ReactDOM from 'react-dom'
import RecentTracks from './components/recent_tracks.js'

ReactDOM.render(
  <RecentTracks user="luke--mitchell" limit="10"/>,
  document.getElementById('outlet')
)
