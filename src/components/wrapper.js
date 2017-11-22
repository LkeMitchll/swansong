import React from 'react'
import PropTypes from 'prop-types'
import styles from './wrapper.css'

class Wrapper extends React.Component {
  render() {
    return (
      <section className={[styles.measure, this.props.styleOverride].join(' ')}>
        {this.props.children}
      </section>
    )
  }
}

Wrapper.propTypes = {
  children: PropTypes.element
}

export default Wrapper
