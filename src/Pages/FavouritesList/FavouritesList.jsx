import React, { useState } from 'react';
import { useFavourites } from '../../context/FavouritesContext';
import { useTranslation } from 'react-i18next';
import Card from '../../Components/Card/Card';

const FavouritesList = () => {
    const { favourites } = useFavourites();
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('artists'); // 'artists', 'albums', 'songs'

    const renderContent = () => {
        switch (activeTab) {
            case 'artists':
                return (
                    <div className="flex flex-wrap gap-4">
                        {favourites.artists.map(artist => (
                            <Card key={artist.id} type="artist" data={artist} />
                        ))}
                    </div>
                );
            case 'albums':
                return (
                    <div className="flex flex-wrap gap-4">
                        {favourites.albums.map(album => (
                            <Card key={album.id} type="album" data={album} />
                        ))}
                    </div>
                );
            case 'songs':
                return (
                    <div className="flex flex-wrap gap-4">
                        {favourites.songs.map(song => (
                            <Card key={song.id} type="song" data={song} />
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-[var(--color4)] text-2xl font-bold mb-6">{t('favourites')}</h1>

            <div className="flex gap-4 mb-6">
                <button
                    className={`px-4 py-2 rounded-lg ${activeTab === 'artists' ? 'bg-[var(--color1)] text-[var(--color4)]' : 'bg-[var(--negro)] text-[var(--color4)]'}`}
                    onClick={() => setActiveTab('artists')}
                >
                    {t('artists')}
                </button>
                <button
                    className={`px-4 py-2 rounded-lg ${activeTab === 'albums' ? 'bg-[var(--color1)] text-[var(--color4)]' : 'bg-[var(--negro)] text-[var(--color4)]'}`}
                    onClick={() => setActiveTab('albums')}
                >
                    {t('albums')}
                </button>
                <button
                    className={`px-4 py-2 rounded-lg ${activeTab === 'songs' ? 'bg-[var(--color1)] text-[var(--color4)]' : 'bg-[var(--negro)] text-[var(--color4)]'}`}
                    onClick={() => setActiveTab('songs')}
                >
                    {t('tracks')}
                </button>
            </div>

            {renderContent()}
        </div>
    );
};

export default FavouritesList;