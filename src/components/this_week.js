import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import getSundayEpoch from '../shared/sunday_epoch.js'
import urlConstructor from '../shared/url_constructor.js'
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
    var epoch = getSundayEpoch(new Date)

    axios.get(urlConstructor('user.getrecenttracks', this.props.user, `&from=${epoch}`))
      .then(res => {
        this.setState({ tracks: res.data.recenttracks['@attr'].total })
      })
  }

  render() {
    return (
      <section className={styles.wrapper}>
        <h2 className={styles.title}>This Week</h2>
        <p className={styles.content}>
          <WeeklyCount total={this.state.tracks}/>
          <span className={styles.part}> Tracks so far.</span>
        </p>
      </section>
    )
  }
}

LastWeek.propTypes = {
  user: PropTypes.string
}

export default LastWeek