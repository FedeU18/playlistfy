import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Pages/Home/Home";
import AlbumDetail from "./Pages/AlbumDetail/AlbumDetail";
import FavoriteSongs from "./Pages/FavoriteSongs/FavoriteSongs";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
import ArtistDetail from "./Pages/ArtistDetail/ArtistDetail";

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

function App() {
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

  if (!accessToken) return <h1>Cargando token...</h1>;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 pt-18">
          <Routes>
            <Route path="/" element={<Home accessToken={accessToken} />} />
            <Route
              path="/albumDetail/:id"
              element={<AlbumDetail accessToken={accessToken} />}
            />
            <Route
              path="/artistDetail/:id"
              element={<ArtistDetail accessToken={accessToken} />}
            />
            <Route path="/favoriteSongs" element={<FavoriteSongs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
