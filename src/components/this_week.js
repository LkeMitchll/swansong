import React from 'react'
import styled from 'react-emotion'
import { ds } from '../shared/design_system'
import PropTypes from 'prop-types'
import axios from 'axios'
import * as Epoch from '../shared/sunday_epoch.js'
import urlConstructor from '../shared/url_constructor.js'
import Subheading from './subheading.js'
import WeekWrapper from './week_wrapper.js'
import WeeklyCount from './weekly_count.js'

const Link = styled.a`
  font-family: ${ds.get('type.fonts.base')};
  font-weight: ${ds.get('type.fontWeight.base')};
  color: ${ds.brand('primary')};
  margin-left: ${ds.get('spacing.base')};
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`

class ThisWeek extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tracks: 'xxx'
    }
  }

  componentDidMount() {
    var epoch = Epoch.getEndOfLastWeek(new Date)

    axios.get(urlConstructor('user.getrecenttracks', this.props.user, `&from=${epoch}`))
      .then(res => {
        this.setState({ tracks: res.data.recenttracks['@attr'].total })
      })
      .catch(err => { window.alert(`This Week: ${err}`) })
  }

  render() {
    return (
      <div>
        <Subheading>This Week</Subheading>
        <WeekWrapper>
          <WeeklyCount total={this.state.tracks} suffix="Tracks so far"/>
          &ndash;
          <Link href={ 'https://www.last.fm/user/' + this.props.user }>More at last.fm</Link>
        </WeekWrapper>
      </div>
    )
  }
}

ThisWeek.propTypes = {
  user: PropTypes.string
}

export default ThisWeek
