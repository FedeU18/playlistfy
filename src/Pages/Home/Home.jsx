import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import { useTranslation } from "react-i18next";
import { fetchAlbums } from "../../services/fetchAlbums";
import { fetchTracks } from "../../services/fetchTracks";
import { fetchArtists } from "../../services/fetchArtists";
import { Link } from "react-router";

const artistIds = [
  "2n2RSaZqBuUUukhbLlpnE6",
  "2ziB7fzrXBoh1HUPS6sVFn",
  "1Ffb6ejR6Fe5IamqA5oRUF",
  "7dGJo4pcD2V6oG8kP0tJRR",
  "37394IP6uhnjIpsawpMu4l",
  "5YCc6xS5Gpj3EkaYGdjyNK",
];

const albumIds = [
  "293aYSIVNjjmkAwupnlxRd",
  "7FqHuAvmREiIwVXVpZ9ooP",
  "6IYPmM3xsOPL2XPSvf1ZAz",
  "0f7R0jf0pcTb6K6IVVPcMD",
  "4SD2UxRO9OgeSCQK0PN7cC",
  "0fYhjxeRFdXp6s8R9hUXKt",
];

const trackIds = [
  "0B4YX3OMtZSmPm9KpiZKl2",
  "1ulH5PIntNj0ro2K69W4Fx",
  "6lFUdRItQEsEuD7dSINL47",
  "0gchQwxmBWj5no8NJ8b2yH",
  "1TDk2Jmi4dVZhm2dum3Jim",
  "5UWwZ5lm5PKu6eKsHAGxOk",
  "4dVbhS6OiYvFikshyaQaCN",
  "76Je5Wklky23mVoxiRszcN",
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
  const [trackIndex, setTrackIndex] = useState(0);
  const [albumIndex, setAlbumIndex] = useState(0);
  const [artistIndex, setArtistIndex] = useState(0);
  const itemsPerPage = 5;

  const visibleTracks = tracks.slice(trackIndex, trackIndex + itemsPerPage);

  const nextTracks = () => {
    if (trackIndex + itemsPerPage < tracks.length) {
      setTrackIndex(trackIndex + itemsPerPage);
    }
  };

  const prevTracks = () => {
    if (trackIndex - itemsPerPage >= 0) {
      setTrackIndex(trackIndex - itemsPerPage);
    }
  };

  const nextArtists = () => {
    if (artistIndex + itemsPerPage < artists.length) {
      setArtistIndex(artistIndex + itemsPerPage);
    }
  };

  const prevArtists = () => {
    if (artistIndex - itemsPerPage >= 0) {
      setArtistIndex(artistIndex - itemsPerPage);
    }
  };

  const nextAlbums = () => {
    if (albumIndex + itemsPerPage < albums.length) {
      setAlbumIndex(albumIndex + itemsPerPage);
    }
  };

  const prevAlbums = () => {
    if (albumIndex - itemsPerPage >= 0) {
      setAlbumIndex(albumIndex - itemsPerPage);
    }
  };

  if (artists.length === 0 && albums.length === 0 && tracks.length === 0) {
    return <h1 className="text">{t("loading")}</h1>;
  }

  return (
    <>
      <div className="px-8 pb-8">
        <h1 className="text-5xl pt-5 pb-5 font-bold text-[var(--color4)]">
          {t("welcome")}
        </h1>

        <h2 className="text-4xl text-[var(--color1)]">
          {t("popular artists")}
        </h2>
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={prevArtists}
            disabled={artistIndex === 0}
            className="bg-[var(--color1)] text-white px-4 py-2 rounded disabled:opacity-50"
          >
            ⬅
          </button>

          <div className="flex flex-wrap justify-evenly w-full">
            {artists
              .slice(artistIndex, artistIndex + itemsPerPage)
              .map((artist) => (
                <Card
                  key={artist.id}
                  type="artist"
                  data={{
                    id: artist.id,
                    name: artist.name,
                    image: artist.images[0]?.url || "default-image-url",
                  }}
                />
              ))}
          </div>

          <button
            onClick={nextArtists}
            disabled={artistIndex + itemsPerPage >= artists.length}
            className="bg-[var(--color1)] text-white px-4 py-2 rounded disabled:opacity-50"
          >
            ➡
          </button>
        </div>

        <h2 className="text-4xl text-[var(--color1)]">
          {t("most played albums")}
        </h2>
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={prevAlbums}
            disabled={albumIndex === 0}
            className="bg-[var(--color1)] text-white px-4 py-2 rounded disabled:opacity-50"
          >
            ⬅
          </button>

          <div className="flex flex-wrap justify-evenly w-full">
            {albums
              .slice(albumIndex, albumIndex + itemsPerPage)
              .map((album) => (
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
              ))}
          </div>

          <button
            onClick={nextAlbums}
            disabled={albumIndex + itemsPerPage >= albums.length}
            className="bg-[var(--color1)] text-white px-4 py-2 rounded disabled:opacity-50"
          >
            ➡
          </button>
        </div>

        <h2 className="text-4xl text-[var(--color1)]">{t("top tracks")}</h2>
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={prevTracks}
            className="bg-[var(--color1)] text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={trackIndex === 0}
          >
            ⬅
          </button>

          <div className="flex flex-wrap justify-evenly w-full ease-in-out">
            {visibleTracks.map((track) => (
              <Card
                key={track.id}
                type="song"
                data={{
                  albumId: track.album.id,
                  name: track.name,
                  artist: track.artists[0]?.name || "Unknown Artist",
                  image: track.album.images[0].url || "default-image-url",
                }}
              />
            ))}
          </div>

          <button
            onClick={nextTracks}
            className="bg-[var(--color1)] text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={trackIndex + itemsPerPage >= tracks.length}
          >
            ➡
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
