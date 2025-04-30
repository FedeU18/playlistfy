import React, { useState } from "react";
import styles from "./Header.module.css";
import DeployableMenu from "../DeployableMenu/DeployableMenu";
import {useTranslation} from 'react-i18next';


const Header = () => {

  const {t} = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      {/* <img src="src\assets\Logo.png" alt="Logo Playlistfy" /> */}
      <div className={styles.logo}><a href="#">Playlistfy</a></div>
      <input className={styles.input} type="text" placeholder={t('search')} />
      <div onClick={toggleMenu}>
        <i className={`fa-solid fa-bars ${styles.menuIcon}`}></i>
      </div>
      <DeployableMenu isOpen={isMenuOpen} />
    </header>
  );
}

export default Header;