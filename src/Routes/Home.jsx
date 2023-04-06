import React, { useContext } from 'react'
import { ContextGlobal } from "../Components/utils/global.context"
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContext(ContextGlobal).providerValue;
  const { theme, data } = state;

  return (
    <main className="" style={{ background: theme.background, color: theme.font }}>
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