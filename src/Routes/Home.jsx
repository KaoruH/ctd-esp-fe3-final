import React, { useContext } from 'react'
import { ContextGlobal } from "../Components/utils/global.context"
import Card from '../Components/Card'
import styles from "../Styles/Routes.module.css"

const Home = () => {
  const { state } = useContext(ContextGlobal).providerValue;
  const { theme, data } = state;

  return (
    <main className={styles[theme]}>
      <h1>Home</h1>
      <div className='card-grid'>
        {data.map((dentist) => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
        ))}
      </div>
    </main>
  )
}

export default Home