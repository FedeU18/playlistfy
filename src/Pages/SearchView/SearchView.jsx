import { useLocation } from "react-router-dom"; 
import { useFavourites } from "../../context/FavouritesContext";
import {Link} from "react-router";

const SearchView = () => {
    const location = useLocation();
    const { artists = [], songs = [], albums = [] } = location.state || {};
    const { addFavourite, removeFavourite, isFavourite } = useFavourites();

    
    const tomarItem = (item, type) => {
        switch (type) {
            case 'artists':
                return {
                    id: item.id,
                    name: item.name,
                    images: item.images,
                    type: 'artist',
                };
            case 'albums':
                return {
                    id: item.id,
                    name: item.name,
                    images: item.images,
                    type: 'album',
                };
            case 'songs':
                return {
                    id: item.id,
                    name: item.name,
                    images: item.album?.images || [],
                    artist: item.artists?.[0]?.name || '',
                    albumId: item.album?.id || null,
                    type: 'song',
                };
            default:
                return item;
        }
    };

    //funcion para manejar añadir/quitar favoritos
    const handleFavourite = (item, type) => {
        const completeItem = tomarItem(item, type);
    
        if (!completeItem.id) {
            console.warn("Item sin ID, no se puede guardar como favorito:", completeItem);
            return;
        }
    
        //agregar la propiedad image si no existe
        completeItem.image = completeItem.image || completeItem.images?.[0]?.url || null;
    
        if (isFavourite(completeItem.id, type)) {
            removeFavourite(completeItem.id, type);
        } else {
            addFavourite(completeItem, type);
        }
    };

    return (
        <div className="p-4">
            {/* ARTISTAS */}
            {artists.length > 0 && (
                <>
                    <h2 className="text-2xl font-bold mb-4">Artistas</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                        {artists.map((artist, index) => (
                            <div key={index} className="bg-black shadow rounded overflow-hidden">
                                <Link to={'/artistDetail/' + artist.id}>
                                <img
                                    src={artist.images?.[0]?.url || "#"}
                                    alt={artist.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg text-[var(--color4)] font-semibold">{artist.name}</h3>
                                    <p className="text-sm text-[var(--color4)]">Popularidad: {artist.popularity}</p>
                                    {/*añadir a fav*/}
                                </div>
                                </Link>
                                    <button
                                        className={`text-xl ${isFavourite(artist.id, 'artists') ? 'text-red-500' : 'text-[var(--color4)]'}`}
                                        onClick={() => handleFavourite(artist, 'artists')}
                                    >
                                        {isFavourite(artist.id, 'artists') ? '♥' : '♡'}
                                    </button>
                                </div>
                            ))}
                    </div>
                </>
            )}

            {/* CANCIONES */}
            {songs.length > 0 && (
                <>
                    <h2 className="text-2xl font-bold mb-4">Canciones</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                        {songs.slice(0, 4).map((track, index) => (
                            <div key={index} className="bg-black shadow rounded overflow-hidden">
                                <Link to={'/albumDetail/' + track.album.id}>
                                <img
                                    src={track.album.images[0]?.url || "#"}
                                    alt={track.name}
                                    className="w-full h-48 object-cover"
                                />
                                </Link>
                                <div className="p-4">
                                    <h3 className="text-lg text-[var(--color4)] font-semibold">{track.name}</h3>
                                    <p className="text-sm text-[var(--color4)]">{track.artists[0]?.name}</p>

                                    {/*añadir a fav*/}
                                    <button
                                        className={`text-xl ${isFavourite(track.id, 'songs') ? 'text-red-500' : 'text-[var(--color4)]'}`}
                                        onClick={() => handleFavourite(track, 'songs')}
                                    >
                                        {isFavourite(track.id, 'songs') ? '♥' : '♡'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* ÁLBUMES */}
            {albums.length > 0 && (
                <>
                    <h2 className="text-2xl font-bold mb-4">Álbumes</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {albums.map((album, index) => (
                            <div key={index} className="bg-black shadow rounded overflow-hidden">
                                <Link to={'/albumDetail/' + album.id}>
                                <img
                                    src={album.images[0]?.url || "#"}
                                    alt={album.name}
                                    className="w-full h-48 object-cover"
                                />
                                </Link>
                                <div className="p-4">
                                    <h3 className="text-lg text-[var(--color4)] font-semibold">{album.name}</h3>

                                    {/*añadir a fav*/}
                                    <button
                                        className={`text-xl ${isFavourite(album.id, 'albums') ? 'text-red-500' : 'text-[var(--color4)]'}`}
                                        onClick={() => handleFavourite(album, 'albums')}
                                    >
                                        {isFavourite(album.id, 'albums') ? '♥' : '♡'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* MENSAJE DE VACÍO */}
            {artists.length === 0 && songs.length === 0 && albums.length === 0 && (
                <p>No se encontraron resultados para esta búsqueda.</p>
            )}
        </div>
    );
};

export default SearchView;