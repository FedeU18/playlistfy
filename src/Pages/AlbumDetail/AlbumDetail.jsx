import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router";

const AlbumDetail = ({ accessToken }) => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const fetchAlbum = async () => {
      if (!accessToken) return;

      try {
        const response = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const data = await response.json();
        setAlbum(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching album:", error);
      }
    };

    fetchAlbum();
  }, [accessToken, id]);

  if (!album) return <h1 className="text-white text-center">{t("loading")}</h1>;

  return (
    <div className="max-w-6xl mx-auto bg-[#030303e5] text-white p-4 sm:p-6 md:p-10 rounded-[20px] sm:rounded-[30px] md:rounded-[40px] mb-5">
      <button
        className="mb-6 border py-2 px-3 rounded bg-[var(--color1)] text-[var(--color4)] hover:bg-[var(--color2)]"
        onClick={() => navigate("/")}
      >
        {t("back")}
      </button>

      <h1 className="text-3xl font-bold mb-6">
        {t("detail of")} {album.name}
      </h1>

      <h2 className="text-xl sm:text-2xl font-semibold mb-6">
        {t("artist")}: {album.artists[0].name}
      </h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* img album */}
        <div className="w-full lg:max-w-[400px] mx-auto lg:mx-0">
          <a
            href={album.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={album.images[0].url}
              alt={album.name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </a>
        </div>

        {/*canciones*/}
        <div className="w-full">
          <h3 className="text-2xl font-bold mb-4">{t("songs")}</h3>
          <ul className="space-y-3">
            {album.tracks.items.map((track, index) => (
              <li
                key={track.id}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-700 pb-2"
              >
                <Link
                  to={`/song/${track.id}`}
                  className="hover:underline hover:text-[var(--color2)]"
                >
                  {index + 1}. {track.name}
                </Link>
                <span className="text-sm text-gray-400 sm:text-right">
                  {/*duraicon de cnacinoes */}
                  {Math.floor(track.duration_ms / 60000)}:
                  {(Math.floor(track.duration_ms / 1000) % 60).toString().padStart(2, "0")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AlbumDetail;