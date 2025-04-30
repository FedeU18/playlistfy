import React from "react";
import styles from "./Home.module.css";
import Card from "../../Components/Card/Card";

const Home = () => {
  return (
    <>
      <div className={styles.pageContainer}>

        <h1 className={styles.pageTitle}>¡Bienvenido!</h1>

        <h2 className={styles.pageSubtitle}>Canciones del momento</h2>
        <div className={styles.rowContainer}>
          <Card
            type="artist"
            data={{
              name: "Nombre del artista",
              image: "url-de-la-imagen"
            }}
          />
          <Card
            type="artist"
            data={{
              name: "Nombre del artista",
              image: "url-de-la-imagen"
            }}
          />
          <Card
            type="artist"
            data={{
              name: "Nombre del artista",
              image: "url-de-la-imagen"
            }}
          />
          <Card
            type="artist"
            data={{
              name: "Nombre del artista",
              image: "url-de-la-imagen"
            }}
          />
          <Card
            type="artist"
            data={{
              name: "Nombre del artista",
              image: "url-de-la-imagen"
            }}
          />
        </div>


        <h2 className={styles.pageSubtitle}>Artistas populares</h2>
        <div className={styles.rowContainer}>
          <Card
            type="album"
            data={{
              name: "Nombre del álbum",
              artist: "Nombre del artista",
              image: "url-de-la-imagen"
            }}
          />
          <Card
            type="album"
            data={{
              name: "Nombre del álbum",
              artist: "Nombre del artista",
              image: "url-de-la-imagen"
            }}
          />
          <Card
            type="album"
            data={{
              name: "Nombre del álbum",
              artist: "Nombre del artista",
              image: "url-de-la-imagen"
            }}
          />
          <Card
            type="album"
            data={{
              name: "Nombre del álbum",
              artist: "Nombre del artista",
              image: "url-de-la-imagen"
            }}
          />
          <Card
            type="album"
            data={{
              name: "Nombre del álbum",
              artist: "Nombre del artista",
              image: "url-de-la-imagen"
            }}
          />
        </div>


        <h2 className={styles.pageSubtitle}>Álbumes más escuchados</h2>
        <div className={styles.rowContainer}>
          <Card
            type="song"
            data={{
              name: "Nombre de la canción",
              artist: "Nombre del artista",
              albumImage: "url-de-la-imagen-del-album"
            }}
          />
          <Card
            type="song"
            data={{
              name: "Nombre de la canción",
              artist: "Nombre del artista",
              albumImage: "url-de-la-imagen-del-album"
            }}
          />
          <Card
            type="song"
            data={{
              name: "Nombre de la canción",
              artist: "Nombre del artista",
              albumImage: "url-de-la-imagen-del-album"
            }}
          />
          <Card
            type="song"
            data={{
              name: "Nombre de la canción",
              artist: "Nombre del artista",
              albumImage: "url-de-la-imagen-del-album"
            }}
          />
          <Card
            type="song"
            data={{
              name: "Nombre de la canción",
              artist: "Nombre del artista",
              albumImage: "url-de-la-imagen-del-album"
            }}
          />
        </div>

      </div>
    </>

  );
};

export default Home;
