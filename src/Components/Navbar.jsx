import React, { useContext } from 'react';
import { ContextGlobal } from './utils/global.context'
import { Link } from 'react-router-dom'
import styles from "../Styles/Navbar.module.css"

const Navbar = () => {

  const { state, toggleTheme } = useContext(ContextGlobal).providerValue;
  const { theme } = state;

  return (
    <nav className={styles.navbar}>
      <Link to={"/"} className={styles.link}>Home</Link>
      <Link to={"/favs"} className={styles.link}>Favorites</Link>
      <Link to={"/contact"} className={styles.link}>Contact Us</Link>
      <button className={styles["button" + theme]} onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar