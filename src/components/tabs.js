import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import ds from '../shared/design_system'
import * as Epoch from '../shared/epoch.js'
import Tab from './tab.js'
import Week from './week.js'
import { connect } from 'react-redux'
import { selectWeek, fetchTotalsIfNeeded } from '../shared/actions'

const Container = styled.header`
  margin-bottom: ${ds.spacing.base};
  position: relative;
  z-index: 1000;
`

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.toggleTab = this.toggleTab.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(selectWeek(Epoch.getEndOfLastWeek(new Date())))
    dispatch(
      fetchTotalsIfNeeded(Epoch.getEndOfLastWeek(new Date()), Epoch.getNow())
    )
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedWeek !== prevProps.selectedWeek) {
      const { dispatch, selectedWeek } = this.props
      dispatch(fetchTotalsIfNeeded(selectedWeek))
    }
  }

  toggleTab(e, week) {
    const toFrom = {
      current: {
        from: Epoch.getEndOfLastWeek(new Date()),
        to: Epoch.getNow(),
      },
      previous: {
        from: Epoch.getStartOfLastWeek(new Date()),
        to: Epoch.getEndOfLastWeek(new Date()),
      },
    }

    this.props.dispatch(selectWeek(toFrom[week].from))
    this.props.dispatch(fetchTotalsIfNeeded(toFrom[week].from, toFrom[week].to))
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Tab label="This Week" onChange={e => this.toggleTab(e, 'current')} />
          &nbsp;/&nbsp;
          <Tab
            label="Last Week"
            onChange={e => this.toggleTab(e, 'previous')}
          />
        </Container>
        <Week key={this.props.selectedWeek} totals={this.props.totals} />
      </React.Fragment>
    )
  }
}

Tabs.propTypes = {
  selectedWeek: PropTypes.number.isRequired,
  totals: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  const { selectedWeek, totalsByWeek } = state
  const { isFetching, lastUpdated, items: totals } = totalsByWeek[
    selectedWeek
  ] || {
    isFetching: true,
    items: [],
  }
  return {
    selectedWeek,
    totals,
    isFetching,
    lastUpdated,
  }
}
export default connect(mapStateToProps)(Tabs)
