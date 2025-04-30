import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>Playlistfy</div>
            <div className={styles.links}>
                <a href="#">Link?</a>
                <a href="#">Link?</a>
                <a href="#">Link?</a>
            </div>
            <p>Disclaimer:</p>
        </footer>
    )
}

export default Footer