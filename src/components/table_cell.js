import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import ds from '../shared/design_system'

const Header = styled.th`
`

const Cell = Header.withComponent('td')

class TableCell extends React.Component {
  render() {
    const isHeader = this.props.header

    if (isHeader) {
      return (
        <Header
          faded={this.props.faded}
          width={this.props.width}
          header={this.props.header}>
          {this.props.children}
        </Header>
      )
    } else {
      return (
        <Cell
          faded={this.props.faded}
          width={this.props.width}>
          {this.props.children}
        </Cell>
      )
    }
  }
}

TableCell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  faded: PropTypes.bool,
  header: PropTypes.bool,
  width: PropTypes.string
}

export default TableCell
