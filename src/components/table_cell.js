import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import { ds } from '../shared/design_system'

const Header = styled.th`
  font-family: ${ds.get('type.fonts.alt')};
  border-bottom: 1px solid ${ds.brand('primary')};
  font-size: ${ds.fs('alt')};
  font-weight: normal;
  opacity: ${props => props.faded ? 0.6 : 1};
  padding: ${ds.get('spacing.s')};
  padding-left: 0;
  width: ${props => props.width || 'auto'};

  @media (max-width: ${ds.bp('s')}) {
    ${props => props.header ? 'display: none;' : 'display: block;'}
    padding: 0;
    margin-right: ${ds.get('spacing.s')};
    border-bottom: 0;
    font-size: ${ds.fs('xs')};

    &:last-of-type {
      border-bottom: 1px solid ${ds.brand('primary')};
      padding-bottom: ${ds.get('spacing.s')};
    }
  }
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
