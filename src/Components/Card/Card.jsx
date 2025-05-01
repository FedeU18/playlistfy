import { useTranslation } from "react-i18next";

const Card = ({ type, data }) => {
  const { t } = useTranslation();

  const renderContent = () => {
    switch (type) {
      case "artist":
        return (
          <>
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-auto rounded mb-2 text-[var(--color4)]"
            />
            <h3 className="text-[var(--color4)] text-lg font-bold mb-1">
              {data.name}
            </h3>
          </>
        );
      case "album":
        return (
          <>
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-auto rounded mb-2 text-[var(--color4)]"
            />
            <h3 className="text-[var(--color4)] text-lg font-bold mb-1">
              {data.name}
            </h3>
            <h5 className="text-[var(--color3)] text-sm">{data.artist}</h5>
          </>
        );
      case "song":
        return (
          <>
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-auto rounded mb-2 text-[var(--color4)]"
            />
            <h3 className="text-[var(--color4)] text-lg font-bold mb-1">
              {data.name}
            </h3>
            <h5 className="text-[var(--color3)] text-sm">{data.artist}</h5>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[var(--negro)] rounded-lg p-4 cursor-pointer w-[10%] min-w-[7rem] m-2.5 hover:opacity-80">
      {renderContent()}
    </div>
  );
};

export default Card;
