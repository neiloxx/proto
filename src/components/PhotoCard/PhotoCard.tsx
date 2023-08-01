import styles from './style.module.css';

interface PhotoCardProps {
    url: string;
}

export const PhotoCard = ({url}: PhotoCardProps) => {
    return <div className={styles.imageWrapper}>
        <img className={styles.image} src={url} alt=''/>
        <div className={styles.infoWrapper}>
            <p className={styles.tag}>#sometags</p>
            <button className={styles.button}>Это мое</button>
        </div>
    </div>
}