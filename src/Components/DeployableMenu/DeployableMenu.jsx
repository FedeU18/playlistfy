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
                <a href="#">{t('home')}</a>
                <a href="#">{t('favourites')}</a>
                <a href="#">{t('playlists')}</a>
                <a href="#" onClick={(e) => {
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