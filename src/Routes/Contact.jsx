import React, { useContext } from 'react'
import { ContextGlobal } from "../Components/utils/global.context"
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContext(ContextGlobal).providerValue;
  const { theme } = state;

  return (
    <div style={{ color: theme.font, backgroundColor: theme.background }}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  )
}

export default Contact