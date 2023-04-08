import React from 'react'
import styles from "../Styles/Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p>Powered by</p>
        <img src="../../public/images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
