import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router";
import NotFound from "../NotFound/NotFound";

const ArtistDetail = ({ accessToken }) => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const fetchArtist = async () => {
      if (!accessToken) return;

      try {
        const response = await fetch(
          `https://api.spotify.com/v1/artists/${id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          // Cualquier error HTTP lo tratamos como 404
          console.error("Spotify API error:", response.status);
          setError(true);
          return;
        }

        const data = await response.json();
        setArtist(data);
      } catch (err) {
        console.error("Error fetching artist:", err);
        setError(true);
      }
    };

    fetchArtist();
  }, [accessToken, id]);

  // Mientras ni artist ni error estén definidos
  if (!artist && !error) {
    return <p>{t("loading")}</p>;
  }

  // Si hubo error, mostramos 404
  if (error) {
    return <NotFound />;
  }

  // Si está todo ok, renderizamos el detalle
  return (
    <div className="max-w-6xl mx-auto bg-[#030303e5] text-white p-4 sm:p-6 md:p-10 rounded-[20px] mb-5">
      <button
        className="mb-6 border py-2 px-3 rounded bg-[var(--color1)] text-[var(--color4)] hover:bg-[var(--color2)]"
        onClick={() => navigate("/")}
      >
        {t("back")}
      </button>
      <h1 className="text-3xl font-bold mb-6">
        {t("detail of")} {artist.name}
      </h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:max-w-[400px] mx-auto lg:mx-0">
          <a
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={artist.images[0]?.url}
              alt={artist.name}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </a>
        </div>
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <h2 className="text-xl sm:text-4xl font-semibold mb-6">
            {t("artist")}: {artist.name}
          </h2>
          <p className="text-xl sm:text-2xl font-semibold mb-6">
            {t("followers")}: {artist.followers.total}
          </p>
          <p className="text-xl sm:text-2xl font-semibold mb-6">
            {t("genres")}: {artist.genres.join(", ")}
          </p>
          <p className="text-xl sm:text-2xl font-semibold mb-6">
            {t("popularity")}: {artist.popularity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
