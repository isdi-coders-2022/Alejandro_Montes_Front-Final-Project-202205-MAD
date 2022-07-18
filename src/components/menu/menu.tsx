import { Link } from 'react-router-dom';
import styles from './menu.module.css';

export function Menu({ menu }: { menu: Function }) {
    const handleClick = () => {
        menu();
    };
    return (
        <div className={styles.menu}>
            <nav className={styles.navigation}>
                <p className={styles.small}>01</p>
                <Link
                    to={'/home'}
                    className={styles.navItem}
                    onClick={handleClick}
                >
                    HOME
                </Link>
                <p className={styles.small}>02</p>
                <Link
                    to={'/artists'}
                    className={styles.navItem}
                    onClick={handleClick}
                >
                    ARTISTS
                </Link>
                <p className={styles.small}>03</p>
                <Link
                    to={'/categories'}
                    className={styles.navItem}
                    onClick={handleClick}
                >
                    CATEGORIES
                </Link>
                <p className={styles.small}>04</p>
                <Link
                    to={'/mycomix'}
                    className={styles.navItem}
                    onClick={handleClick}
                >
                    MYCOMIX
                </Link>
            </nav>
            <div className={styles.menuRight}>
                <button onClick={handleClick} className={styles.close}>
                    close
                </button>
                <Link
                    to={'/login'}
                    className={styles.login}
                    onClick={handleClick}
                >
                    login
                </Link>
            </div>
        </div>
    );
}
