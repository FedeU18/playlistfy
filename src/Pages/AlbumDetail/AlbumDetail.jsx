import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";

const AlbumDetail = ({ accessToken }) => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  // Obtener datos del álbum

  const { t } = useTranslation();

  useEffect(() => {
    const fetchAlbum = async () => {
      if (!accessToken) return;

      try {
        const response = await fetch(
          "https://api.spotify.com/v1/albums/" + id,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const data = await response.json();
        setAlbum(data); // Aquí se guarda el álbum completo
        console.log(data);
      } catch (error) {
        console.error("Error fetching album:", error);
      }
    };

    fetchAlbum();
  }, [accessToken, id]);

  if (!album) return <h1 className="text">{t("loading")}</h1>;

  return (
    //idea: podría ser un contenedor negro con bordes redondos
    <div className="justify-self-center-safe w-6xl bg-[#030303e5] text-white p-10 rounded-[40px] mb-5">
      <h1 className="text-3xl font-bold mb-8">
        {t("detail of")} {album.name}
      </h1>

      <div className="flex flex-col md:flex-row items-start gap-6">
        <img
          src={album.images[0].url}
          alt={album.name}
          className="w-full md:w-1/3 rounded-lg shadow-lg"
        />
        <div className="space-y-2 text-lg">
          <h2 className="text-2xl font-semibold">
            {t("artist")}: {album.artists[0].name}
          </h2>
        </div>
        {/* 
          <h3 className="text-xl text-gray-300">{infoCancion.artists[0].name}</h3>
          <p><span className="font-semibold">Duración:</span> {Math.floor(infoCancion.duration_ms / 60000)}:{String(Math.floor((infoCancion.duration_ms % 60000) / 1000)).padStart(2, '0')}</p>
          <p><span className="font-semibold">Popularidad:</span> {infoCancion.popularity}</p>
          <p><span className="font-semibold">Álbum:</span> {infoCancion.album.name}</p>
          <p><span className="font-semibold">Fecha de lanzamiento:</span> {infoCancion.album.release_date}</p>
          <p>
            <span className="font-semibold">URL de la canción:</span>{" "}
            <a
              href={infoCancion.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 underline"
            >
              {infoCancion.external_urls.spotify}
            </a>
          </p>
          <p>
            <span className="font-semibold">URL del álbum:</span>{" "}
            <a
              href={infoCancion.album.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 underline"
            >
              {infoCancion.album.external_urls.spotify}
            </a>
          </p>
          <p>
            <span className="font-semibold">URL del artista:</span>{" "}
            <a
              href={infoCancion.artists[0].external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 underline"
            >
              {infoCancion.artists[0].external_urls.spotify}
            </a>
          </p>
        */}
      </div>
    </div>
  );
};

export default AlbumDetail;
