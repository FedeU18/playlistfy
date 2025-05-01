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
    <header className="fixed bg-[var(--negro)] text-[var(--color4)] w-full h-14 flex justify-between items-center px-4 z-[1000]">
      <div className="text-4xl font-extrabold p-0 text-[var(--color4)]"><a href="#">Playlistfy</a></div>
      <input className="bg-[var(--negro)] text-[var(--color3)] border border-[var(--color3)] p-[5px] rounded w-[30%] absolute left-1/2 -translate-x-1/2" type="text" placeholder={t('search')} />
      <div onClick={toggleMenu}>
        <i className="text-[var(--color4)] text-[1.8rem] hover:text-[var(--color3)] hover:text-[2rem] fa-solid fa-bars"></i>
      </div>
      <DeployableMenu isOpen={isMenuOpen} />
    </header>
  );
}

export default Header;