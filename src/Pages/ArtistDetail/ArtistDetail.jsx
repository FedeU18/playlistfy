import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";

const ArtistDetail = ({ accessToken }) => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);

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
    </>
  );
};

export default ArtistDetail;
