import React from 'react'
import styled from 'react-emotion'
import ds from '../shared/design_system'
import * as Epoch from '../shared/epoch.js'
import { Spring } from 'react-spring'
import Tab from './tab.js'
import Week from './week.js'

const Container = styled.header`
  margin-bottom: ${ds.spacing.base};
  position: relative;
  z-index: 1000;
`

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isTabToggled: false,
      from: Epoch.getEndOfLastWeek(new Date()),
      to: Epoch.getNow(),
    }
    this.toggleTab = this.toggleTab.bind(this)
  }

  toggleTab() {
    this.setState(prevState => ({
      isTabToggled: !prevState.isTabToggled,
      from: this.state.isTabToggled
        ? Epoch.getEndOfLastWeek(new Date())
        : Epoch.getStartOfLastWeek(new Date()),
      to: this.state.isTabToggled
        ? Epoch.getNow()
        : Epoch.getEndOfLastWeek(new Date()),
    }))
  }

  render() {
    return (
      <React.Fragment>
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {props => (
            <Container style={props}>
              <Tab
                isCurrent={!this.state.isTabToggled}
                label="This Week"
                onChange={this.toggleTab}
              />
              &nbsp;/&nbsp;
              <Tab
                isCurrent={this.state.isTabToggled}
                label="Last Week"
                onChange={this.toggleTab}
              />
            </Container>
          )}
        </Spring>

        {this.state.isTabToggled ? (
          <Week key="last" from={this.state.from} to={this.state.to} />
        ) : (
          <Week key="current" from={this.state.from} to={this.state.to} />
        )}
      </React.Fragment>
    )
  }
}

export default Tabs
