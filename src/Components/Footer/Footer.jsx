import styles from './Footer.module.css';
import {useTranslation} from 'react-i18next';

const Footer = () => {

    const {t} = useTranslation();

    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>Playlistfy</div>
            <div className={styles.links}>
                <a href="#">Link?</a>
                <a href="#">Link?</a>
                <a href="#">Link?</a>
            </div>
            <p className={styles.disclaimer}>{t('disclaimer')}</p>
        </footer>
    )
}

export default Footer