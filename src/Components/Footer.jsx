import React from 'react'
import styles from "../Styles/Footer.module.css"
import logo from "../img/DH.png"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p>Powered by</p>
        <img src={logo} alt='DH-logo' />
    </footer>
  )
}

export default Footer
