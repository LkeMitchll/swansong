import React from 'react'
import styles from './footer.css'

class Footer extends React.Component {
  render () {
    return (
      <footer className={styles.wrapper}>
        <p className={styles.content}>An <a className={styles.link} href="http://interroban.gg">interroban.gg</a> project</p>
        <p className={styles.content}>
          Set in <a className={styles.link} href="https://klim.co.nz/retail-fonts/tiempos-text/">Tiempos Text</a> &amp; <a className={styles.link} href="https://quoteunquoteapps.com/courierprime/">Courier Prime</a>.
          <br/>
          Data from <a className={styles.link} href="https://www.last.fm/api">last.fm</a>.
          <br/>
          Source code hosted at <a className={styles.link} href="https://github.com/LkeMitchll/swansong">GitHub</a>.
        </p>
      </footer>
    )
  }
}

export default Footer
