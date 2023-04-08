import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ContextGlobal } from "../Components/utils/global.context"
import styles from "../Styles/Routes.module.css"
import myImg from "../img/OC3O341.png"

const Detail = () => {
  const { state } = useContext(ContextGlobal).providerValue;
  const { theme, data } = state;

  const { id } = useParams();

  const dentist = data.find((dentist) => dentist.id === parseInt(id));

  console.log(data)
  console.log(dentist)
  console.log(id)

  return (
    <div className={styles[theme]}>
      <h1>Detail Dentist id </h1>
      <img src={myImg} alt='dentist_pic' className={styles.detailimg}></img>
      <p>Name: {dentist.name}</p>
      <p>Email: {dentist.email}</p>
      <p>Telephone: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
      <a href="https://br.freepik.com/psd-gratuitas/homem-que-faz-uma-face-parva_938409.htm#query=avatar%20unisex%20transparent%20background&position=47&from_view=search&track=ais" className={styles.credits}>Imagem de kues no Freepik</a>
    </div>
  )
}

export default Detail