import React from 'react'
import styled from 'react-emotion'
import { ds } from '../shared/design_system'
import axios from 'axios'
import * as Epoch from '../shared/sunday_epoch.js'
import Loading from './loading.js'
import Subheading from './subheading.js'
import WeekWrapper from './week_wrapper.js'
import WeeklyCount from './weekly_count.js'

const Link = styled.a`
  font-family: ${ds.get('type.fonts.base')};
  font-weight: ${ds.get('type.fontWeight.base')};
  color: ${ds.brand('primary')};
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`

class ThisWeek extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tracks: '0',
      loading: true
    }
  }

  componentDidMount() {
    var from = Epoch.getEndOfLastWeek(new Date)
    var to = Epoch.getNow()

    axios.get(`${process.env.API_URL}/recent_tracks/total/${from}.${to}`)
      .then(res => {
        this.setState({
          tracks: res.data,
          loading: false
        })
      })
      .catch(err => { window.alert(`This Week: ${err}`) })
  }

  render() {
    const isLoading = this.state.loading

    return (
      <div>
        <Subheading>This Week</Subheading>
        <WeekWrapper>
          {isLoading ? (
            <Loading>Loading...</Loading>
          ) : ([
            <WeeklyCount
              key="tracks"
              total={this.state.tracks}
              suffix="Tracks so far"/>,
            <Link
              key="link"
              href={ 'https://www.last.fm/user/luke--mitchell' }>
                More at last.fm
            </Link>
          ])}
        </WeekWrapper>
      </div>
    )
  }
}

export default ThisWeek
