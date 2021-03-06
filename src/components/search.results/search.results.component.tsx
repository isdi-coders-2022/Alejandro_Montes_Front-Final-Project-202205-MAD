import { iComic } from '../../interfaces/iComics';
import { SearchResult } from '../search.result/search.result';
import styles from './search.results.module.css';

export function SearchResults({ comics }: { comics: Array<iComic> }) {
    return (
        <div className={styles.container}>
            {comics.map((comic) => (
                <SearchResult comic={comic} key={comic._id}></SearchResult>
            ))}
        </div>
    );
}
