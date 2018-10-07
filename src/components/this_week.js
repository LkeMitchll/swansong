import React from 'react'
import axios from 'axios'
import * as Epoch from '../shared/epoch.js'
import WeekWrapper from './week_wrapper.js'
import WeeklyCount from './weekly_count.js'

class ThisWeek extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tracks: '0',
      loading: true
    }
  }

  componentDidMount() {
    var from = Epoch.getEndOfLastWeek(new Date())
    var to = Epoch.getNow()

    axios
      .get(`${process.env.API_URL}/recent_tracks/total/${from}.${to}`)
      .then(res => {
        this.setState({
          tracks: res.data,
          loading: false
        })
      })
      .catch(err => {
        window.alert(`This Week: ${err}`)
      })
  }

  render() {
    const isLoading = this.state.loading

    return (
      <WeekWrapper>
        {isLoading ? (
          <WeeklyCount key="tracks" total="0" suffix="Tracks" />
        ) : (
          <WeeklyCount key="tracks" total={this.state.tracks} suffix="Tracks" />
        )}
      </WeekWrapper>
    )
  }
}

export default ThisWeek
