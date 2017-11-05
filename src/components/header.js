import React from 'react'
import styles from './header.css'

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className={styles.logo}>Swansong</h1>
      </header>
    )
  }
}

export default Header
