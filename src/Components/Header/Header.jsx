import styles from "./Header.module.css";


const Header = () => {
  return (
    <header className={styles.header}>
      {/* <img src="src\assets\Logo.png" alt="Logo Playlistfy" /> */}
      <div className={styles.logo}><a href="#">Playlistfy</a></div>
      <input className={styles.input} type="text" placeholder="Buscar" />
      <a href="#"><i className={`fa-solid fa-bars ${styles.i}`}></i></a>
    </header>
  );
}

export default Header;