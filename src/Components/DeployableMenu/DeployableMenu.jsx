import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './DeployableMenu.module.css';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import {useTranslation} from 'react-i18next';

const DeployableMenu = ({ isOpen, onClose }) => {
    const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
    const {t} = useTranslation();

    const handleNavigation = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <>
            <div className={`${styles.deployableMenu} ${isOpen ? styles.open : ''}`}>
                <Link 
                    to="/" 
                    className="text-[var(--color4)] no-underline text-lg p-2 rounded transition-colors duration-200 ease-in-out hover:bg-white/10"
                    onClick={handleNavigation}
                >
                    {t('home')}
                </Link>
                <Link 
                    to="/favouritesList" 
                    className="text-[var(--color4)] no-underline text-lg p-2 rounded transition-colors duration-200 ease-in-out hover:bg-white/10"
                    onClick={handleNavigation}
                >
                    {t('favourites')}
                </Link>
                <a 
                    href="#" 
                    className="text-[var(--color4)] no-underline text-lg p-2 rounded transition-colors duration-200 ease-in-out hover:bg-white/10" 
                    onClick={(e) => {
                        e.preventDefault();
                        setIsLanguageModalOpen(true);
                        if (onClose) {
                            onClose();
                        }
                    }}
                >
                    {t('language')}
                </a>
            </div>
            <LanguageSelector 
                isOpen={isLanguageModalOpen}
                onClose={() => setIsLanguageModalOpen(false)}
            />
        </>
    );
};

export default DeployableMenu;