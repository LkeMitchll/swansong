import React from 'react'
import styled, { css } from 'react-emotion'
import ds from '../shared/design_system'
import * as Epoch from '../shared/epoch.js'
import Wrapper from './wrapper.js'
import Week from './week.js'

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
    this.state = {
      isTabToggled: false,
      activeTab: 'current',
      from: Epoch.getEndOfLastWeek(new Date()),
      to: Epoch.getNow(),
    }
  }

  tTabb(e, tab, from, to) {
    this.setState(prevState => ({
      isTabToggled: !prevState.isTabToggled,
      activeTab: tab,
      from: from,
      to: to,
    }))
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <label
            className={this.state.activeTab == 'current' ? ActiveLink : Link}
          >
            <Input
              type="radio"
              value="Last Week"
              name="week"
              onChange={e =>
                this.toggleTab(
                  e,
                  'current',
                  Epoch.getEndOfLastWeek(new Date()),
                  Epoch.getNow()
                )
              }
            />
            This Week
          </label>
          &nbsp;/&nbsp;
          <label className={this.state.activeTab == 'last' ? ActiveLink : Link}>
            <Input
              type="radio"
              value="Last Week"
              name="week"
              onChange={e =>
                this.toggleTab(
                  e,
                  'last',
                  Epoch.getStartOfLastWeek(new Date()),
                  Epoch.getEndOfLastWeek(new Date())
                )
              }
            />
            Last Week
          </label>
        </Container>

        <Wrapper>
          {this.state.isTabToggled ? (
            <Week key="last" from={this.state.from} to={this.state.to} />
          ) : (
            <Week key="current" from={this.state.from} to={this.state.to} />
          )}
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default Tabs
