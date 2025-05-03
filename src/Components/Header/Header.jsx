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
<header className="fixed bg-[var(--negro)] text-[var(--color4)] w-full px-4 py-2 z-[1000]">
  {/* Pantallas chicas */}
  <div className="flex flex-col sm:hidden w-full">
    <div className="flex justify-between items-center mb-2">
      {/*logo*/}
      <div
        className="text-xl font-extrabold text-[var(--color4)] hover:text-[var(--color3)] transition-colors cursor-pointer"
        onClick={() => navigate("/")}
      >
        Playlistify
      </div>

      {/*icono menu pantl chicas */}
      <div onClick={toggleMenu} className="z-[1001]">
        <i className="fa-solid fa-bars text-[1.5rem] text-[var(--color4)] hover:text-[var(--color3)] hover:scale-110 transition-transform cursor-pointer"></i>
      </div>
    </div>

    {/*search debajo en pantallas chicas*/}
    <div className="w-full">
      <Search />
    </div>
  </div>

  {/*pantallas grandes*/}
  <div className="hidden sm:flex items-center w-full">
    {/*Logo*/}
    <div
      className="text-2xl font-extrabold text-[var(--color4)] hover:text-[var(--color3)] transition-colors cursor-pointer"
      onClick={() => navigate("/")}
    >
      Playlistify
    </div>

    {/*search*/}
    <div className="flex-grow mx-4">
      <Search />
    </div>

    {/*icono menu */}
    <div onClick={toggleMenu} className="z-[1001]">
      <i className="fa-solid fa-bars text-[1.8rem] text-[var(--color4)] hover:text-[var(--color3)] hover:scale-110 transition-transform cursor-pointer"></i>
    </div>
  </div>

  <DeployableMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
</header>
  );
}

export default Header;