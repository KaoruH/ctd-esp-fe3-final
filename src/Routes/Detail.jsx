import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ContextGlobal } from "../Components/utils/global.context"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { state } = useContext(ContextGlobal).providerValue;
  const { theme, data } = state;
 
  const { id } = useParams();
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const dentist = data.find((dentist) => dentist.id === parseInt(id));

  console.log(data)
  console.log(dentist)
  console.log(id)

  return (
    <div style={{ background: theme.background, color: theme.font }}>
      <h1>Detail Dentist id </h1>
      <p>Name: {dentist.name}</p>
      <p>Email: {dentist.email}</p>
      <p>Telephone: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
  
    </div>
  )
}

export default Detail