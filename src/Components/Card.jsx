import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";

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

    <div className="card" style={{ color: theme.font, backgroundColor: theme.background }}>
      <Link to={`/dentist/${id}`} >
        <h3>{name}</h3>
        <p>{username}</p>
        <p>ID: {id}</p>
        {error && <p>{error}</p>}
      </Link>
      {favorites.find((fav) => fav.id === id) ? (
        <button onClick={handleRemoveFav} className="favButton">Remove fav </button>
      ) : (
        <button onClick={handleAddFav} className="favButton">Add fav</button>
      )}
    </div>
  );
};

export default Card;
