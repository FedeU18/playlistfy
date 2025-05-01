import React from "react";
import styles from "./Home.module.css";
import Card from "../../Components/Card/Card";
import { useTranslation } from 'react-i18next';

const Home = () => {

  const { t } = useTranslation();

  return (
    <>
      <div className="px-8 pb-8">

        <h1 className="text-5xl pt-5 pb-5 font-bold text-[var(--color4)]">{t('welcome')}</h1>

        <h2 className="text-4xl text-[var(--color1)]">{t('top tracks')}</h2>
        <div className="flex flex-wrap p-4 justify-evenly">
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


        <h2 className="text-4xl text-[var(--color1)]">{t('popular artists')}</h2>
        <div className="flex flex-wrap p-4 justify-evenly">
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


        <h2 className="text-4xl text-[var(--color1)]" >{t('most played albums')}</h2>
        <div className="flex flex-wrap p-4 justify-evenly">
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
