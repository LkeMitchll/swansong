import React from 'react'
import PropTypes from 'prop-types'
import styles from './wrapper.css'

class WrapperWide extends React.Component {
  render() {
    return (
      <section className={styles.wide}>
        {this.props.children}
      </section>
    )
  }
}

WrapperWide.propTypes = {
  children: PropTypes.element
}

export default WrapperWide
