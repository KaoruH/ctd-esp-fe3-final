import { createContext, useEffect, useReducer, useMemo } from "react";

export const themes = {
  light: {
    font: 'black',
    background: 'white'
  },
  dark: {
    font: 'white',
    background: 'black'
  }
};

export const initialState = { theme: themes.light, data: [], favorites: [], error: null }

export const ContextGlobal = createContext(undefined);

export const contextReducer = (state, action) => {
  switch (action.type) {

    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === themes.light ? themes.dark : themes.light };

    case 'FETCH_DATA':
      return { ...state, data: action.payload };

    case "ADD_FAVORITE":
      if (state.favorites.find((fav) => fav.id === action.payload.id)) {
        return { ...state, error: "El dentista ya está en favoritos" };
      }
      return { ...state, favorites: [...state.favorites, action.payload], error: null };

    case "REMOVE_FAVORITE":
      const updatedFavorites = state.favorites.filter((fav) => fav.id !== action.payload.id);
      return { ...state, favorites: updatedFavorites, error: null };

    case "RESET_FAVORITES":
      return { ...state, favorites: [], error: null };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};


export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(contextReducer, initialState);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      dispatch({ type: 'FETCH_DATA', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const providerValue = useMemo(() => {
    const toggleTheme = () => {
      dispatch({ type: "TOGGLE_THEME" });
    };

    const addFav = ({ id, name, username }) => {

      dispatch({ type: "ADD_FAVORITE", payload: { id, name, username } });

    };

    const removeFav = ({ id }) => {
      dispatch({ type: "REMOVE_FAVORITE", payload: { id } });
    };

    const resetFav = () => {
      dispatch({ type: "RESET_FAVORITES" });
    };

    const setError = (error) => {
      dispatch({ type: "SET_ERROR", payload: error });
    };

    return {
      state,
      toggleTheme,
      addFav,
      removeFav,
      resetFav,
      setError,
    };
  }, [state]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state.favorites]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContextGlobal.Provider value={{ providerValue }}>
      {children}
    </ContextGlobal.Provider>
  );
};
