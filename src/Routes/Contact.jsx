import React, { useContext } from 'react'
import { ContextGlobal } from "../Components/utils/global.context"
import Form from '../Components/Form'
import styles from "../Styles/Routes.module.css"


const Contact = () => {
  const { state } = useContext(ContextGlobal).providerValue;
  const { theme } = state;

  return (
    <div className={styles[theme] + " " + styles.contact}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  )
}

export default Contact