import React, { useContext } from 'react';
import { ContextGlobal } from './utils/global.context'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, toggleTheme } = useContext(ContextGlobal).providerValue;
  const { theme } = state;

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to={"/"} >Home</Link>
      <Link to={"/favs"} >Favorites</Link>
      <Link to={"/contact"} >Contact Us</Link>
      <button style={{ background: theme.background, color: theme.font }} onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar