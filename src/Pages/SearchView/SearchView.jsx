import { useLocation } from "react-router-dom";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import Favourites from "../../Components/Favourites/Favourites";

const SearchView = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const { artists = [], songs = [], albums = [] } = location.state || {};

    const tomarItem = (item, type) => {
        switch (type) {
            case 'artists':
                return {
                    id: item.id,
                    name: item.name,
                    images: item.images,
                    type: 'artist',
                    image: item.images?.[0]?.url || null,
                };
            case 'albums':
                return {
                    id: item.id,
                    name: item.name,
                    images: item.images,
                    type: 'album',
                    image: item.images?.[0]?.url || null,
                    artist: item.artists?.[0]?.name || '',
                };
            case 'songs':
                return {
                    id: item.id,
                    name: item.name,
                    images: item.album?.images || [],
                    artist: item.artists?.[0]?.name || '',
                    albumId: item.album?.id || null,
                    type: 'song',
                    image: item.album?.images?.[0]?.url || null,
                };
            default:
                return item;
        }
    };

    return (
        <div className="p-4">
            {/*artistass*/}
            {artists.length > 0 && (
                <>
                    <h2 className="text-2xl font-bold mb-4">{t("artist")}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                        {artists.map((artist, index) => (
                            <div key={index} className="relative bg-black shadow rounded overflow-hidden">
                                <Link to={'/artistDetail/' + artist.id}>
                                    <img
                                        src={artist.images?.[0]?.url || "#"}
                                        alt={artist.name}
                                        className="w-full h-48 object-cover"
                                    />
                                </Link>
                                <Favourites item={tomarItem(artist, 'artists')} type="artists" />
                                <div className="p-4">
                                    <h3 className="text-lg text-[var(--color4)] font-semibold">{artist.name}</h3>
                                    <p className="text-sm text-[var(--color4)]">{t("popularity")}: {artist.popularity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/*canciones*/}
            {songs.length > 0 && (
                <>
                    <h2 className="text-2xl font-bold mb-4">{t("songs")}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                        {songs.slice(0, 4).map((track, index) => (
                            <div key={index} className="relative bg-black shadow rounded overflow-hidden">
                                <Link to={'/albumDetail/' + track.album.id}>
                                    <img
                                        src={track.album.images[0]?.url || "#"}
                                        alt={track.name}
                                        className="w-full h-48 object-cover"
                                    />
                                </Link>
                                <Favourites item={tomarItem(track, 'songs')} type="songs" />
                                <div className="p-4">
                                    <h3 className="text-lg text-[var(--color4)] font-semibold">{track.name}</h3>
                                    <p className="text-sm text-[var(--color4)]">{track.artists[0]?.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/*albums*/}
            {albums.length > 0 && (
                <>
                    <h2 className="text-2xl font-bold mb-4">{t("albums")}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {albums.map((album, index) => (
                            <div key={index} className="relative bg-black shadow rounded overflow-hidden">
                                <Link to={'/albumDetail/' + album.id}>
                                    <img
                                        src={album.images[0]?.url || "#"}
                                        alt={album.name}
                                        className="w-full h-48 object-cover"
                                    />
                                </Link>
                                <Favourites item={tomarItem(album, 'albums')} type="albums" />
                                <div className="p-4">
                                    <h3 className="text-lg text-[var(--color4)] font-semibold">{album.name}</h3>
                                    <p className="text-sm text-[var(--color4)]">{album.artists[0]?.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/*msj de q no hay nada*/}
            {artists.length === 0 && songs.length === 0 && albums.length === 0 && (
                <p>{t("noResults")}</p>
            )}
        </div>
    );
};

export default SearchView;