import { useLocation } from "react-router-dom";

const SearchView = () => {
    const location = useLocation();
    const { albums } = location.state || { albums: [] }; //obtener los álbumes de la navegación

    return (
        <div className="mx-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {albums.length > 0 ? (
                albums.map((album, index) => (
                    <div key={index} className="bg-white shadow rounded overflow-hidden">
                        <img
                            src={album.images[0]?.url || "#"} //imagen del álbum
                            alt={album.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{album.name}</h3>
                        </div>
                    </div>
                ))
            ) : (
                <p>No se encontraron álbumes para este artista.</p>
            )}
        </div>
    );
};

export default SearchView;