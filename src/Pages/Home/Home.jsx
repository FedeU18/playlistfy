import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Card from "../../Components/Card/Card";
import { useTranslation } from "react-i18next";

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

const artistIds = [
  "2n2RSaZqBuUUukhbLlpnE6",
  "2ziB7fzrXBoh1HUPS6sVFn",
  "1Ffb6ejR6Fe5IamqA5oRUF",
  "7dGJo4pcD2V6oG8kP0tJRR",
  "37394IP6uhnjIpsawpMu4l",
];

const albumIds = [
  "293aYSIVNjjmkAwupnlxRd",
  "7FqHuAvmREiIwVXVpZ9ooP",
  "6IYPmM3xsOPL2XPSvf1ZAz",
  "0f7R0jf0pcTb6K6IVVPcMD",
  "4SD2UxRO9OgeSCQK0PN7cC",
];

const trackIds = [
  "0B4YX3OMtZSmPm9KpiZKl2",
  "1ulH5PIntNj0ro2K69W4Fx",
  "6lFUdRItQEsEuD7dSINL47",
  "0gchQwxmBWj5no8NJ8b2yH",
  "1TDk2Jmi4dVZhm2dum3Jim",
];

const Home = () => {
  const [tracks, setTracks] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [accessToken, setAccessToken] = useState("");

  // Obtener token de acceso
  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const result = await fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            grant_type: "client_credentials",
            client_id: clientId,
            client_secret: clientSecret,
          }),
        });

        const data = await result.json();
        setAccessToken(data.access_token);
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    fetchAccessToken();
  }, []);

  useEffect(() => {
    const fetchArtists = async () => {
      if (!accessToken) return;

      try {
        const response = await fetch(
          `https://api.spotify.com/v1/artists?ids=${artistIds.join(",")}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const data = await response.json();
        setArtists(data.artists);
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };

    fetchArtists();
  }, [accessToken]);

  useEffect(() => {
    const fetchAlbums = async () => {
      if (!accessToken) return;

      try {
        const response = await fetch(
          `https://api.spotify.com/v1/albums?ids=${albumIds.join(",")}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const data = await response.json();
        setAlbums(data.albums); // Aquí puedes actualizar el estado con los álbumes
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, [accessToken]);

  useEffect(() => {
    const fetchTracks = async () => {
      if (!accessToken) return;

      try {
        // IDs de las canciones
        const response = await fetch(
          `https://api.spotify.com/v1/tracks?ids=${trackIds.join(",")}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const data = await response.json();
        setTracks(data.tracks);
        console.log(data.tracks);
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    };

    fetchTracks();
  }, [accessToken]);

  const { t } = useTranslation();

  if (artists.length === 0 && albums.length === 0 && tracks.length === 0) {
    return <h1 className="text">Loading...</h1>;
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
        <div className="flex flex-wrap p-4 justify-evenly">
          {artists.map((artist) => (
            <Card
              key={artist.id}
              type="artist"
              data={{
                name: artist.name,
                image: artist.images[0]?.url || "default-image-url",
              }}
            />
          ))}
        </div>

        <h2 className="text-4xl text-[var(--color1)]">
          {t("most played albums")}
        </h2>
        <div className="flex flex-wrap p-4 justify-evenly">
          {albums.map((album) => (
            <Card
              key={album.id}
              type="album"
              data={{
                name: album.name,
                artist: album.artists[0]?.name || "Unknown Artist",
                image: album.images[0]?.url || "default-image-url",
              }}
            />
          ))}
        </div>

        <h2 className="text-4xl text-[var(--color1)]">{t("top tracks")}</h2>
        <div className="flex flex-wrap p-4 justify-evenly">
          {tracks.map((track) => (
            <Card
              key={track.id}
              type="song"
              data={{
                name: track.name,
                artist: track.artists[0]?.name || "Unknown Artist",
                image: track.album.images[0].url || "default-image-url",
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
