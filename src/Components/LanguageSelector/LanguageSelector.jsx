import styles from './LanguageSelector.module.css';
import { useTranslation } from 'react-i18next';

const LanguageSelector = ({ isOpen, onClose }) => {

    const { i18n } = useTranslation();

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <h2 className={styles.modalTitle}>Seleccionar idioma</h2>
                <div className={styles.languageOptions}>
                    <button className={styles.optionsButton} onClick={() => handleLanguageChange('es')}>
                        <img src="https://flagicons.lipis.dev/flags/4x3/es.svg" alt="ES" className={styles.flag} /> 
                        Español
                    </button>
                    <button className={styles.optionsButton} onClick={() => handleLanguageChange('en')}>
                        <img src="https://flagicons.lipis.dev/flags/4x3/gb.svg" alt="GB" className={styles.flag} /> 
                        English
                    </button>
                    <button className={styles.optionsButton} onClick={() => handleLanguageChange('pt')}>
                        <img src="https://flagicons.lipis.dev/flags/4x3/pt.svg" alt="PT" className={styles.flag} /> 
                        Português
                    </button>
                    <button className={styles.optionsButton} onClick={() => handleLanguageChange('de')}>
                        <img src="https://flagicons.lipis.dev/flags/4x3/de.svg" alt="DE" className={styles.flag} /> 
                        Deutsch
                    </button>
                    <button className={styles.optionsButton} onClick={() => handleLanguageChange('fr')}>
                        <img src="https://flagicons.lipis.dev/flags/4x3/fr.svg" alt="FR" className={styles.flag} /> 
                        Français
                    </button>
                    <button className={styles.optionsButton} onClick={() => handleLanguageChange('it')}>
                        <img src="https://flagicons.lipis.dev/flags/4x3/it.svg" alt="IT" className={styles.flag} /> 
                        Italiano
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LanguageSelector;