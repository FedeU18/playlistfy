import React, { createContext, useState, useContext, useEffect } from "react";

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(() => {
    const savedFavourites = localStorage.getItem("favourites");
    return savedFavourites
      ? JSON.parse(savedFavourites)
      : {
          songs: [],
          albums: [],
          artists: [],
        };
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
    // console.log('Estado actual de favoritos:', favourites);
  }, [favourites]);

  const addFavourite = (item, type) => {
    if (!item.id) {
      // console.error('Item sin ID:', item);
      return;
    }

    setFavourites((prev) => {
      // Verificar si el elemento ya existe
      const exists = prev[type].some((favItem) => favItem.id === item.id);
      if (exists) {
        // console.log('El elemento ya existe en favoritos');
        return prev;
      }

      const newFavourites = {
        ...prev,
        [type]: [...prev[type], item],
      };
      // console.log(`Añadiendo a favoritos:`, {
      //   tipo: type,
      //   itemId: item.id,
      //   item: item
      // });
      return newFavourites;
    });
  };

  const removeFavourite = (itemId, type) => {
    setFavourites((prev) => {
      const newFavourites = {
        ...prev,
        [type]: prev[type].filter((item) => item.id !== itemId),
      };
      // console.log(`Eliminando de favoritos:`, {
      //   tipo: type,
      //   itemId: itemId
      // });
      return newFavourites;
    });
  };

  const isFavourite = (itemId, type) => {
    if (!itemId) {
      // console.error('ID no proporcionado para verificar favorito');
      return false;
    }
    const result = favourites[type].some((item) => item.id === itemId);
    // console.log(`Verificando favorito:`, {
    //   tipo: type,
    //   itemId: itemId,
    //   esFavorito: result
    // });
    return result;
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourite, removeFavourite, isFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouritesContext);
