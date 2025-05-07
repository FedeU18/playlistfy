import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NotFound from "../NotFound/NotFound"; // Ajusta la ruta si hace falta

const Song = ({ accessToken }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [track, setTrack] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrack = async () => {
      if (!accessToken) return;
      try {
        const res = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (!res.ok) {
          // Cualquier error HTTP (400, 404, 500...) lo tratamos como 404
          setError(true);
          return;
        }
        const data = await res.json();
        setTrack(data);
      } catch (err) {
        console.error("Error fetching track:", err);
        setError(true);
      }
    };

    fetchTrack();
  }, [accessToken, id]);

  // Mientras se carga el track o token
  if (!track && !error) {
    return <p className="text-center text-white">{t("loading")}</p>;
  }

  // Si hubo error, mostramos 404
  if (error) {
    return <NotFound />;
  }

  // Renderizamos el iframe sólo si el track existe
  return (
    <div className="max-w-6xl mx-auto bg-[#030303e5] text-white p-4 sm:p-6 md:p-10 rounded mb-5">
      <button
        className="mb-6 border py-2 px-3 rounded bg-[var(--color1)] text-[var(--color4)] hover:bg-[var(--color2)]"
        onClick={() => navigate("/")}
      >
        {t("back")}
      </button>

      <h1 className="text-2xl sm:text-3xl font-bold mb-4">
        {track.name} — {track.artists.map((a) => a.name).join(", ")}
      </h1>

      <iframe
        style={{ borderRadius: "12px" }}
        src={`https://open.spotify.com/embed/track/${id}?utm_source=generator`}
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="w-full"
      ></iframe>
    </div>
  );
};

export default Song;
