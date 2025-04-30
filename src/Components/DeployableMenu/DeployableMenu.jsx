import React from 'react';
import styles from './DeployableMenu.module.css';

const DeployableMenu = ({ isOpen }) => {
    return (
        <div className={`${styles.deployableMenu} ${isOpen ? styles.open : ''}`}>
            <a href="#">Inicio</a>
            <a href="#">Favoritos</a>
            <a href="#">Playlists</a>
        </div>
    )
}

export default DeployableMenu;