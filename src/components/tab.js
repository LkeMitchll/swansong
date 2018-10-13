import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'

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

class Tab extends React.Component {
  render() {
    return (
      <label className={this.props.isCurrent ? ActiveLink : Link}>
        <Input
          type="radio"
          value="false"
          name="week"
          onChange={this.props.onChange}
        />
        {this.props.label}
      </label>
    )
  }
}

Tab.propTypes = {
  isCurrent: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
}

export default Tab
