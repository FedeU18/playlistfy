import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import {useTranslation} from 'react-i18next';

const DeployableMenu = ({ isOpen, onClose }) => {
    const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);
    const {t} = useTranslation();

    useEffect(() => {
        const header = document.querySelector('header');
        if (header) {
            const updateHeaderHeight = () => {
                const height = header.offsetHeight;
                setHeaderHeight(height);
            };

            updateHeaderHeight();
            window.addEventListener('resize', updateHeaderHeight);

            return () => window.removeEventListener('resize', updateHeaderHeight);
        }
    }, []);

    const handleNavigation = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <>
            <div 
                className={`fixed bg-[var(--negro)] p-4 flex flex-col gap-2 transition-all duration-300 ease-in-out h-fit min-w-[200px] shadow-md z-[999] ${isOpen ? 'right-0' : '-right-full'} md:w-auto w-full md:items-start items-center`}
                style={{ top: `${headerHeight}px` }}
            >
                <Link 
                    to="/" 
                    className="text-[var(--color4)] no-underline text-lg p-2 rounded transition-colors duration-200 ease-in-out hover:bg-white/10 w-full text-center md:text-left"
                    onClick={handleNavigation}
                >
                    {t('home')}
                </Link>
                <Link 
                    to="/favouritesList" 
                    className="text-[var(--color4)] no-underline text-lg p-2 rounded transition-colors duration-200 ease-in-out hover:bg-white/10 w-full text-center md:text-left"
                    onClick={handleNavigation}
                >
                    {t('favourites')}
                </Link>
                <a 
                    href="#" 
                    className="text-[var(--color4)] no-underline text-lg p-2 rounded transition-colors duration-200 ease-in-out hover:bg-white/10 w-full text-center md:text-left" 
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