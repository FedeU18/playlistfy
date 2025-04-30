import styles from './Card.module.css';

const Card = ({ type, data }) => {
    const renderContent = () => {
        switch (type) {
            case 'artist':
                return (
                    <>
                        <img src={data.image} alt={data.name} className={styles.cardImage} />
                        <h3 className={styles.cardTitle}>{data.name}</h3>
                    </>
                );
            case 'album':
                return (
                    <>
                        <img src={data.image} alt={data.name} className={styles.cardImage} />
                        <h3 className={styles.cardTitle}>{data.name}</h3>
                        <h5 className={styles.cardSubtitle}>{data.artist}</h5>
                    </>
                );
            case 'song':
                return (
                    <>
                        <img src={data.image} alt={data.name} className={styles.cardImage} />
                        <h3 className={styles.cardTitle}>{data.name}</h3>
                        <h5 className={styles.cardSubtitle}>{data.artist}</h5>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles.card}>
            {renderContent()}
        </div>
    )
}

export default Card;