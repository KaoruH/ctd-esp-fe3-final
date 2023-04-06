import React, { useContext } from 'react'
import { ContextGlobal } from "../Components/utils/global.context"
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { state } = useContext(ContextGlobal).providerValue;
  const { theme, favorites } = state;

  return (
    <div style={{ background: theme.background, color: theme.font }}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favorites.map((dentist) => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
