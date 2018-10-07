import React from 'react'
import styled, { css } from 'react-emotion'
import ds from '../shared/design_system'
import Wrapper from './wrapper.js'
import LastWeek from './last_week.js'
import ThisWeek from './this_week.js'

const Container = styled.header`
  margin-bottom: ${ds.spacing.base};
  position: relative;
  z-index: 1000;
`

const Input = styled.input`
  display: none;
`

const Link = css`
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`

const ActiveLink = css`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isTabToggled: false, activeTab: 'last' }
  }

  toggleSection(e, tab) {
    this.setState(prevState => ({
      isTabToggled: !prevState.isTabToggled,
      activeTab: tab,
    }))
  }

  renderWeek() {
    var week = <LastWeek />

    if (this.state.isTabToggled) {
      week = <ThisWeek />
    }

    return week
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <label className={this.state.activeTab == 'last' ? ActiveLink : Link}>
            <Input
              type="radio"
              value="Last Week"
              name="week"
              onChange={e => this.toggleSection(e, 'last')}
            />
            Last Week
          </label>
          &nbsp;/&nbsp;
          <label
            className={this.state.activeTab == 'current' ? ActiveLink : Link}
          >
            <Input
              type="radio"
              value="Last Week"
              name="week"
              onChange={e => this.toggleSection(e, 'current')}
            />
            This Week
          </label>
        </Container>
        <Wrapper>{this.renderWeek()}</Wrapper>
      </React.Fragment>
    )
  }
}

export default Tabs
