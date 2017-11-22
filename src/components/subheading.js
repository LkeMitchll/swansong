import React from 'react'
import PropTypes from 'prop-types'
import styles from './subheading.css'

class Subheading extends React.Component {
  render() {
    return(
      <h2 className={styles.root}>
        {this.props.children}
      </h2>
    )
  }
}

Subheading.propTypes = {
  children: PropTypes.element
}

export default Subheading
