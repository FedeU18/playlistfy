import React, { useState } from 'react';
import { useFavourites } from '../../context/FavouritesContext';
import { useTranslation } from 'react-i18next';
import Card from '../../Components/Card/Card';

const FavouritesList = () => {
  const { favourites } = useFavourites();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('artists');

  const renderContent = () => {
    switch (activeTab) {
      case 'artists':
        return favourites.artists.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {favourites.artists.map(artist => (
              <Card key={artist.id} type="artist" data={artist} />
            ))}
          </div>
        ) : (
          <p className="text-[var(--color4)] text-lg text-center mt-8 font-bold">
            {t('empty artists')}
          </p>
        );
      case 'albums':
        return favourites.albums.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {favourites.albums.map(album => (
              <Card key={album.id} type="album" data={album} />
            ))}
          </div>
        ) : (
          <p className="text-[var(--color4)] text-lg text-center mt-8 font-bold">
            {t('empty albums')}
          </p>
        );
      case 'songs':
        return favourites.songs.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {favourites.songs.map(song => (
              <Card key={song.id} type="song" data={song} />
            ))}
          </div>
        ) : (
          <p className="text-[var(--color4)] text-lg text-center mt-8 font-bold">
            {t('empty songs')}
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-[var(--color4)] text-2xl font-bold mb-6">{t('Favorites')}</h1>
      
      <div className="flex gap-4 mb-6">
        <button 
          className={`px-4 py-2 rounded-lg ${activeTab === 'artists' ? 'bg-[var(--color1)] text-[var(--color4)]' : 'bg-[var(--negro)] text-[var(--color4)]'}`}
          onClick={() => setActiveTab('artists')}
        >
          {t('Favorite Artists')}
        </button>
        <button 
          className={`px-4 py-2 rounded-lg ${activeTab === 'albums' ? 'bg-[var(--color1)] text-[var(--color4)]' : 'bg-[var(--negro)] text-[var(--color4)]'}`}
          onClick={() => setActiveTab('albums')}
        >
          {t('Favorite Albums')}
        </button>
        <button 
          className={`px-4 py-2 rounded-lg ${activeTab === 'songs' ? 'bg-[var(--color1)] text-[var(--color4)]' : 'bg-[var(--negro)] text-[var(--color4)]'}`}
          onClick={() => setActiveTab('songs')}
        >
          {t('Favorite Songs')}
        </button>
      </div>

      {renderContent()}
    </div>
  );
};

export default FavouritesList;