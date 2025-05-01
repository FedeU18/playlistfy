import styles from './Footer.module.css';
import {useTranslation} from 'react-i18next';

const Footer = () => {

    const {t} = useTranslation();

    return (
        <footer className="w-full bg-[var(--negro)] text-[var(--color4)] p-4 text-center min-h-[50px]">
            <div className="text-2xl font-bold mb-4">Playlistfy</div>
            <div className="flex justify-center gap-8 mb-4">
                <a href="#" className="text-[var(--color4)] no-underline hover:text-[var(--color3)]">Link?</a>
                <a href="#" className="text-[var(--color4)] no-underline hover:text-[var(--color3)]">Link?</a>
                <a href="#" className="text-[var(--color4)] no-underline hover:text-[var(--color3)]">Link?</a>
            </div>
            <p className="w-1/2 mx-auto">{t('disclaimer')}</p>
        </footer>
    )
}

export default Footer