import React from "react";
import styles from "./Home.module.css";
import Card from "../../Components/Card/Card";
import { useTranslation } from 'react-i18next';

const Home = () => {

  const { t } = useTranslation();

  return (
    <>
      <div className={styles.pageContainer}>

        <h1 className={styles.pageTitle}>{t('welcome')}</h1>

        <h2 className={styles.pageSubtitle}>{t('top tracks')}</h2>
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


        <h2 className={styles.pageSubtitle}>{t('popular artists')}</h2>
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


        <h2 className={styles.pageSubtitle}>{t('most played albums')}</h2>
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
