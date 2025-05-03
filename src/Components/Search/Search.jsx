import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

const Search = () => {
    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(false); //estado de carga
    const navigate = useNavigate(); //hook para la navegación

    useEffect(() => {
        // Obtener el token de acceso
        var authParams = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        };
        fetch('https://accounts.spotify.com/api/token', authParams)
        .then(result => result.json())
        .then(data => setAccessToken(data.access_token));
    }, []);

    //search function
    async function search(event) {
        event.preventDefault(); //prevenir el comportamiento predeterminado del formulario

        if (searchInput.trim() === "") {
            console.log("El campo de búsqueda está vacío.");
            return;
        }

        setLoading(true); //activar el estado de carga
        console.log("Buscando:" + searchInput);

        // Get request usando search para obtener la ID del artista
        var searchParams = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        };

        //buscar artista usando el input
        var artistID = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(searchInput)}&type=artist`, searchParams)
            .then(response => response.json())
            .then(data => { return data.artists.items[0]?.id });

        console.log("ID del artista: " + artistID);

        //obtener los álbumes del artista (pq el del video no usa el returnedAlbums???)
        var returnedAlbums = await fetch(`https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&market=ES&limit=50`, searchParams)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setAlbums(data.items); //actualizar el estado de los álbumes
            });

        setLoading(false); //desactivar el estado de carga
    }

    //useEffect para redirigir a la vista de búsqueda después de que los álbumes se hayan actualizado
    useEffect(() => {
        if (albums.length > 0) {
            navigate("/searchView", { state: { albums } });
            setAlbums([]); // limpiar después de navegar
        }
    }, [albums, navigate]);

    return (
        <div className="search-container w-full flex justify-center items-center py-4">
            <form
                className="flex gap-2 w-full max-w-xl"
                onSubmit={search}
            >
                <input
                    type="text"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Buscar artista, álbum o canción"
                    value={searchInput}
                    onChange={event => setSearchInput(event.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                    Buscar
                </button>
            </form>

            {/*mensaje de "Cargando..." si esta en estado de carga */}
            {loading && (
                <div className="loading-message mt-4">
                    <p className="text-lg text-blue-500">Cargando...</p>
                </div>
            )}
        </div>
    );
};

export default Search;