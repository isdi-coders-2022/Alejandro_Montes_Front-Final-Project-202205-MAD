import { useSelector } from 'react-redux';
import { PicComic } from '../components/pic.comic';
import { iStore } from '../store/store';
import styles from './european.module.css';

export function European() {
    const comics = useSelector((store: iStore) => store.comics);
    return (
        <div>
            <h1>European</h1>
            <ul className={styles.list}>
                {comics
                    .filter((comic) => comic.category === 'european')
                    .map((comic) => (
                        <li className={styles.comic}>
                            <PicComic comic={comic}></PicComic>
                            <h3 className={styles.comicName}>{comic.name}</h3>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default European;
