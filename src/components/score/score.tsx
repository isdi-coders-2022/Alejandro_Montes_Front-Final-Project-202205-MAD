import { SyntheticEvent, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iComic } from '../../interfaces/iComics';
import { updateComicsAction } from '../../reducers/comics/comics.action.creators';
import { ComicHttpStore } from '../../services/comic.http.store';
import { iStore } from '../../store/store';
import styles from './score.module.css';

export function Score({ comic }: { comic: iComic }) {
    const [score, setScore] = useState(-1);
    const [alreadyVoted, setAlreadyVoted] = useState(-1);
    const user = useSelector((store: iStore) => store.user);
    const dispatcher = useDispatch();
    const apiComics = useMemo(() => new ComicHttpStore(), []);

    useEffect(() => {
        const foundScore = findAlreadyVoted(comic, user.user._id);
        if (foundScore) {
            setAlreadyVoted(foundScore?.scored);
            setScore(foundScore?.scored);
        }
    }, [comic, user.user._id]);

    useEffect(() => {
        apiComics
            .scoreComic(comic._id, score)
            .then((comic) => dispatcher(updateComicsAction(comic)));
    }, [apiComics, comic._id, dispatcher, score]);

    const findAlreadyVoted = (comic: iComic, userId: string) => {
        return comic.score.find((user) => user.user === userId);
    };

    const handleChange = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setScore(element.value);
    };

    return (
        <div>
            <select
                className={styles.select}
                name=""
                id=""
                onChange={handleChange}
                value={alreadyVoted}
            >
                <option value="-1">No leído</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>
    );
}