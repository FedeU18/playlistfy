import styles from './AlbumDetail.module.css';

const infoCancion = {
  "album": {
    "album_type": "single",
    "total_tracks": 1,
    "available_markets": [],
    "external_urls": {
      "spotify": "https://open.spotify.com/album/0tGPJ0bkWOUmH7MEOR77qc"
    },
    "href": "https://api.spotify.com/v1/albums/0tGPJ0bkWOUmH7MEOR77qc",
    "id": "0tGPJ0bkWOUmH7MEOR77qc",
    "images": [
      {
        "url": "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
        "height": 640,
        "width": 640
      },
      {
        "url": "https://i.scdn.co/image/ab67616d00001e027359994525d219f64872d3b1",
        "height": 300,
        "width": 300
      },
      {
        "url": "https://i.scdn.co/image/ab67616d000048517359994525d219f64872d3b1",
        "height": 64,
        "width": 64
      }
    ],
    "name": "Cut To The Feeling",
    "release_date": "2017-05-26",
    "release_date_precision": "day",
    "type": "album",
    "uri": "spotify:album:0tGPJ0bkWOUmH7MEOR77qc",
    "artists": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju"
        },
        "href": "https://api.spotify.com/v1/artists/6sFIWsNpZYqfjUpaCgueju",
        "id": "6sFIWsNpZYqfjUpaCgueju",
        "name": "Carly Rae Jepsen",
        "type": "artist",
        "uri": "spotify:artist:6sFIWsNpZYqfjUpaCgueju"
      }
    ]
  },
  "artists": [
    {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju"
      },
      "href": "https://api.spotify.com/v1/artists/6sFIWsNpZYqfjUpaCgueju",
      "id": "6sFIWsNpZYqfjUpaCgueju",
      "name": "Carly Rae Jepsen",
      "type": "artist",
      "uri": "spotify:artist:6sFIWsNpZYqfjUpaCgueju"
    }
  ],
  "available_markets": [],
  "disc_number": 1,
  "duration_ms": 207959,
  "explicit": false,
  "external_ids": {
    "isrc": "USUM71703861"
  },
  "external_urls": {
    "spotify": "https://open.spotify.com/track/11dFghVXANMlKmJXsNCbNl"
  },
  "href": "https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl",
  "id": "11dFghVXANMlKmJXsNCbNl",
  "name": "Cut To The Feeling",
  "popularity": 0,
  "preview_url": null,
  "track_number": 1,
  "type": "track",
  "uri": "spotify:track:11dFghVXANMlKmJXsNCbNl",
  "is_local": false
}

const SongDetail = () => {
  return (
    //idea: podría ser un contenedor negro con bordes redondos
    <div className="justify-self-center-safe w-6xl bg-[#030303e5] text-white p-10 rounded-[40px] mb-5">
      <h1 className="text-3xl font-bold mb-8">Detalle de {infoCancion.name}</h1>
      
      <div className="flex flex-col md:flex-row items-start gap-6">
        <img
          src={infoCancion.album.images[0].url}
          alt={infoCancion.name}
          className="w-full md:w-1/3 rounded-lg shadow-lg"
        />

        <div className="space-y-2 text-lg">
          <h2 className="text-2xl font-semibold">{infoCancion.album.name}</h2>
          <h3 className="text-xl text-gray-300">{infoCancion.artists[0].name}</h3>
          <p><span className="font-semibold">Duración:</span> {Math.floor(infoCancion.duration_ms / 60000)}:{String(Math.floor((infoCancion.duration_ms % 60000) / 1000)).padStart(2, '0')}</p>
          <p><span className="font-semibold">Popularidad:</span> {infoCancion.popularity}</p>
          <p><span className="font-semibold">Álbum:</span> {infoCancion.album.name}</p>
          <p><span className="font-semibold">Fecha de lanzamiento:</span> {infoCancion.album.release_date}</p>
          <p>
            <span className="font-semibold">URL de la canción:</span>{" "}
            <a
              href={infoCancion.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 underline"
            >
              {infoCancion.external_urls.spotify}
            </a>
          </p>
          <p>
            <span className="font-semibold">URL del álbum:</span>{" "}
            <a
              href={infoCancion.album.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 underline"
            >
              {infoCancion.album.external_urls.spotify}
            </a>
          </p>
          <p>
            <span className="font-semibold">URL del artista:</span>{" "}
            <a
              href={infoCancion.artists[0].external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 underline"
            >
              {infoCancion.artists[0].external_urls.spotify}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SongDetail;