import React from 'react'
import PropTypes from 'prop-types'
import WeekWrapper from './week_wrapper.js'
import Count from './count.js'

class Week extends React.Component {
  render() {
    return (
      <WeekWrapper>
        {this.props.totals.map(total => (
          <Count key={total[1].data} total={total[1].data} suffix={total[0]} />
        ))}
      </WeekWrapper>
    )
  }
}

Week.propTypes = {
  totals: PropTypes.array,
}

export default Week
