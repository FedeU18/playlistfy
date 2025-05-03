import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import Favourites from "../Favourites/Favourites";

const Card = ({ type, data }) => {
  const { t } = useTranslation();

  const renderContent = () => {
    switch (type) {
      case "artist":
        return (
          <Link to={`/artistDetail/${data.id}`}>
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-auto rounded mb-2"
            />
            <h3 className="text-[var(--color4)] text-lg font-bold mb-1">
              {data.name}
            </h3>
          </Link>
        );
      case "album":
        return (
          <Link to={`/albumDetail/${data.id}`}>
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-auto rounded mb-2"
            />
            <h3 className="text-[var(--color4)] text-lg font-bold mb-1">
              {data.name}
            </h3>
            <h5 className="text-[var(--color3)] text-sm">{data.artist}</h5>
          </Link>
        );
      case "song":
        return (
          <Link to={`/albumDetail/${data.albumId}`}>
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-auto rounded mb-2"
            />
            <h3 className="text-[var(--color4)] text-lg font-bold mb-1">
              {data.name}
            </h3>
            <h5 className="text-[var(--color3)] text-sm">{data.artist}</h5>
          </Link>
        );
      default:
        return null;
    }
  };

  const getItemId = () => {
    if (type === 'song') {
      return data.trackId || data.id || data.albumId;
    }
    return data.id;
  };

  const itemId = getItemId();

  return (
    <div className="bg-[var(--negro)] rounded-lg p-4 cursor-pointer m-2.5 hover:opacity-80 relative flex-shrink-0 w-full sm:w-[45%] md:w-[30%] lg:w-[20%] xl:w-[15%] 2xl:w-[12%] min-w-[7rem]">
      <Favourites 
        item={{ ...data, id: itemId }} 
        type={type === 'song' ? 'songs' : type === 'album' ? 'albums' : 'artists'} 
      />
      {renderContent()}
    </div>
  );
};

export default Card;