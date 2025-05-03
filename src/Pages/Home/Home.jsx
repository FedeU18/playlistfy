import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import { useTranslation } from "react-i18next";
import { fetchAlbums } from "../../services/fetchAlbums";
import { fetchTracks } from "../../services/fetchTracks";
import { fetchArtists } from "../../services/fetchArtists";
import { Link } from "react-router";
import Carousel from "../../Components/Carousel/Carousel";

const artistIds = [
  "2n2RSaZqBuUUukhbLlpnE6",
  "5YCc6xS5Gpj3EkaYGdjyNK",
  "1Ffb6ejR6Fe5IamqA5oRUF",
  "7dGJo4pcD2V6oG8kP0tJRR",
  "37394IP6uhnjIpsawpMu4l",
  "2ziB7fzrXBoh1HUPS6sVFn",
];

const albumIds = [
  "0fYhjxeRFdXp6s8R9hUXKt",
  "7FqHuAvmREiIwVXVpZ9ooP",
  "6IYPmM3xsOPL2XPSvf1ZAz",
  "0f7R0jf0pcTb6K6IVVPcMD",
  "4SD2UxRO9OgeSCQK0PN7cC",
  "293aYSIVNjjmkAwupnlxRd",
];

const trackIds = [
  "0B4YX3OMtZSmPm9KpiZKl2",
  "1ulH5PIntNj0ro2K69W4Fx",
  "6lFUdRItQEsEuD7dSINL47",
  "0gchQwxmBWj5no8NJ8b2yH",
  "49elju847fdX66ndDF3g5x",
  "1TDk2Jmi4dVZhm2dum3Jim",
  "5UWwZ5lm5PKu6eKsHAGxOk",
  "76Je5Wklky23mVoxiRszcN",
  "4dVbhS6OiYvFikshyaQaCN",
];

const Home = ({ accessToken }) => {
  const [tracks, setTracks] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const loadAllData = async () => {
      if (!accessToken) return;

      const [fetchedAlbums, fetchedArtists, fetchedTracks] = await Promise.all([
        fetchAlbums(accessToken, albumIds),
        fetchArtists(accessToken, artistIds),
        fetchTracks(accessToken, trackIds),
      ]);

      if (fetchedAlbums) setAlbums(fetchedAlbums);
      if (fetchedArtists) setArtists(fetchedArtists);
      if (fetchedTracks) setTracks(fetchedTracks);
    };

    loadAllData();
  }, [accessToken]);

  const { t } = useTranslation();

  // paginación para tracks

  if (artists.length === 0 && albums.length === 0 && tracks.length === 0) {
    return <h1 className="text">{t("loading")}</h1>;
  }

  return (
    <>
      <div className="px-8 pb-8">
        <h1 className="text-5xl pt-5 pb-5 font-bold text-[var(--color4)]">
          {t("welcome")}
        </h1>

        <Carousel
          title={t("popular artists")}
          items={artists}
          itemsPerPage={5}
          renderItem={(artist) => (
            <Card
              key={artist.id}
              type="artist"
              data={{
                id: artist.id,
                name: artist.name,
                image: artist.images[0]?.url || "default-image-url",
              }}
            />
          )}
        />

        <Carousel
          title={t("most played albums")}
          items={albums}
          itemsPerPage={5}
          renderItem={(album) => (
            <Card
              key={album.id}
              type="album"
              data={{
                id: album.id,
                name: album.name,
                artist: album.artists[0]?.name || "Unknown Artist",
                image: album.images[0]?.url || "default-image-url",
              }}
            />
          )}
        />

        <Carousel
          title={t("top tracks")}
          items={tracks}
          itemsPerPage={5}
          renderItem={(track) => (
            <Card
              key={track.id}
              type="song"
              data={{
                albumId: track.album.id,
                name: track.name,
                artist: track.artists[0]?.name || "Unknown Artist",
                image: track.album.images[0]?.url || "default-image-url",
              }}
            />
          )}
        />
      </div>
    </>
  );
};

export default Home;
