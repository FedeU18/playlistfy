import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
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
      className="absolute top-[10px] left-[10px] cursor-pointer text-[#ffd700] transition-transform duration-200 ease-in hover:scale-125 z-10"
      onClick={handleClick}
    >
      {isItemFavourite ? (
        <FaStar size={24} color="#ffd700" />
      ) : (
        <FaRegStar size={24} color="#808080" />
      )}
    </div>
  );
};

export default Favourites;