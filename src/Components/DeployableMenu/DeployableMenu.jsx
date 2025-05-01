import React, { useState } from 'react';
import styles from './DeployableMenu.module.css';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import {useTranslation} from 'react-i18next';

const DeployableMenu = ({ isOpen }) => {
    const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
    const {t} = useTranslation();

    return (
        <>
            <div className={`${styles.deployableMenu} ${isOpen ? styles.open : ''}`}>
                <a href="#" className="text-[var(--color4)] no-underline text-lg p-2 rounded transition-colors duration-200 ease-in-out hover:bg-white/10">{t('home')}</a>
                <a href="#" className="text-[var(--color4)] no-underline text-lg p-2 rounded transition-colors duration-200 ease-in-out hover:bg-white/10">{t('favourites')}</a>
                <a href="#" className="text-[var(--color4)] no-underline text-lg p-2 rounded transition-colors duration-200 ease-in-out hover:bg-white/10">{t('playlists')}</a>
                <a href="#" className="text-[var(--color4)] no-underline text-lg p-2 rounded transition-colors duration-200 ease-in-out hover:bg-white/10" onClick={(e) => {
                    e.preventDefault();
                    setIsLanguageModalOpen(true);
                }}>{t('language')}</a>
            </div>
            <LanguageSelector 
                isOpen={isLanguageModalOpen}
                onClose={() => setIsLanguageModalOpen(false)}
            />
        </>
    );
};

export default DeployableMenu;