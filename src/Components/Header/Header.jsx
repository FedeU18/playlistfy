import React, { useState } from "react";
import styles from "./Header.module.css";
import DeployableMenu from "../DeployableMenu/DeployableMenu";
import Search from "../Search/Search";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router";

const Header = () => {

  const { t } = useTranslation();

  const navigate = useNavigate()

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed bg-[var(--negro)] text-[var(--color4)] w-full h-14 flex justify-between items-center px-4 z-[1000]">
      <div
        className="text-4xl font-extrabold p-0 text-[var(--color4)] hover:text-[var(--color3)] transition-colors cursor-pointer"
        onClick={() => navigate("/")}
      >
        Playlistify
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 w-[30%]">
        <Search />
      </div>
      <div onClick={toggleMenu}>
        <i className="text-[var(--color4)] text-[1.8rem] hover:text-[var(--color3)] hover:text-[2rem] fa-solid fa-bars"></i>
      </div>
      <DeployableMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}

export default Header;