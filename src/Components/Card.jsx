import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";
import styles from "../Styles/Card.module.css"

const Card = ({ name, username, id }) => {
  const { state, addFav, removeFav } = useContext(ContextGlobal).providerValue;
  const { error, favorites, theme } = state;

  const handleAddFav = () => {
    addFav({ id, name, username });
  };

  const handleRemoveFav = () => {
    removeFav({ id });
  };

  return (

    <div className={styles["card" + theme]}>
      <Link to={`/dentist/${id}`} >
        <h3>{name}</h3>
        <p>{username}</p>
        <p>ID: {id}</p>
        {error && <p>{error}</p>}
      </Link>
      {favorites.find((fav) => fav.id === id) ? (
        <button onClick={handleRemoveFav} className={styles["favButton" + theme]}>Remove fav </button>
      ) : (
        <button onClick={handleAddFav} className={styles["favButton" + theme]}>Add fav</button>
      )}
    </div>
  );
};

export default Card;
