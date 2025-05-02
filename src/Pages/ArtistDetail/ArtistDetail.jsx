import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router";

const ArtistDetail = ({ accessToken }) => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const fetchArtist = async () => {
      if (!accessToken) return;

      try {
        const response = await fetch(
          "https://api.spotify.com/v1/artists/" + id,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const data = await response.json();
        setArtist(data);
        console.log("Artist data:", data);
      } catch (error) {
        console.error("Error fetching artist:", error);
      }
    };

    fetchArtist();
  }, [accessToken, id]);

  if (!artist) return <p>{t("loading")}</p>;
  return (
    <>
      <h1>{artist.name}</h1>
      <button
        className="border py-2 px-3 rounded bg-[var(--color1)] text-[var(--color4)] hover:bg-[var(--color2)]"
        onClick={() => navigate("/")}
      >
        Volver
      </button>
    </>
  );
};

export default ArtistDetail;
