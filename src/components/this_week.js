import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import * as Epoch from '../shared/sunday_epoch.js'
import urlConstructor from '../shared/url_constructor.js'
import Subheading from './subheading.js'
import WeeklyCount from './weekly_count.js'
import styles from './weekly_chart.css'

class LastWeek extends React.Component {
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
      <div className={styles.wrapper}>
        <Subheading>This Week</Subheading>
        <p className={styles.content}>
          <WeeklyCount total={this.state.tracks} suffix="Tracks so far"/>
          &ndash;
          <a className={styles.link} href={ 'https://www.last.fm/user/' + this.props.user }>More at last.fm</a>
        </p>
      </div>
    )
  }
}

LastWeek.propTypes = {
  user: PropTypes.string
}

export default LastWeek
