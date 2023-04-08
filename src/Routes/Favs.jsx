import React, { useContext } from 'react'
import { ContextGlobal } from "../Components/utils/global.context"
import Card from "../Components/Card";
import styles from "../Styles/Routes.module.css"

const Favs = () => {

  const { state } = useContext(ContextGlobal).providerValue;
  const { theme, favorites } = state;


  return (
    <div className={styles[theme]}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.map((dentist) => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
