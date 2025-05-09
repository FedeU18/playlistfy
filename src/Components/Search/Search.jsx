import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [loading, setLoading] = useState(false); //estado de carga
  const navigate = useNavigate(); //hook para la navegación
  const { t } = useTranslation();

  useEffect(() => {
    //obtener el token de acceso
    var authParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };
    fetch("https://accounts.spotify.com/api/token", authParams)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  //search function
  async function search(event) {
    event.preventDefault();

    if (searchInput.trim() === "") {
      // console.log("El campo de búsqueda está vacío.");
      return;
    }

    setLoading(true);
    // console.log("Buscando:" + searchInput);

    var searchParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    // Buscar artista y canciones
    var searchResults = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        searchInput
      )}&type=artist,track&limit=10`,
      searchParams
    ).then((response) => response.json());

    //toma al artista principal/mas popular
    const artistID = searchResults.artists?.items[0]?.id;
    //primeras 4 canciones
    const songs = searchResults.tracks?.items?.slice(0, 4) || [];

    let returnedAlbums = [];

    if (artistID) {
      returnedAlbums = await fetch(
        `https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&market=ES&limit=50`,
        searchParams
      )
        .then((response) => response.json())
        .then((data) => data.items);
    }

    setLoading(false);
    const artists = searchResults.artists?.items?.length
      ? [searchResults.artists.items[0]]
      : [];

    navigate("/searchView", {
      state: { artists, songs, albums: returnedAlbums },
    });
  }

  return (
    <div className="search-container w-full flex justify-center items-center">
      <form className="flex gap-2 w-lg" onSubmit={search}>
        <input
          type="text"
          className="flex-1 px-2 py-1 sm:px-4 sm:py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color4)]"
          placeholder={t("search placeholder")}
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button
          type="submit"
          className="bg-[var(--color4)] text-black px-2 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base hover:bg-blue-600 transition-colors"
        >
          {t("search")}
        </button>
      </form>

      {loading && (
        <div className="loading-message mt-4">
          <p className="text-sm sm:text-lg text-blue-500">{t("loading")}...</p>
        </div>
      )}
    </div>
  );
};

export default Search;
