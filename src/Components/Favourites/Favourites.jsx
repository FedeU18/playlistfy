import React from 'react';
import { useFavourites } from '../../context/FavouritesContext';

const Favourites = ({ item, type }) => {
  const { isFavourite, addFavourite, removeFavourite } = useFavourites();
  const isItemFavourite = isFavourite(item.id, type);

  const handleClick = (e) => {
    e.preventDefault();
    if (isItemFavourite) {
      removeFavourite(item.id, type);
    } else {
      addFavourite(item, type);
    }
  };

  return (
    <div
      className={`absolute bottom-[10px] right-[10px] cursor-pointer text-2xl transition-transform duration-200 ease-in hover:scale-125 z-10 ${
        isItemFavourite ? 'text-red-500' : 'text-[var(--color4)]'
      }`}
      onClick={handleClick}
    >
      {isItemFavourite ? '♥' : '♡'}
    </div>
  );
}  

export default Favourites;