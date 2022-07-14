import { useState } from 'react';
import styles from './header.module.css';
import { Menu } from './menu';

export function Header() {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    return (
        <>
            {menu ? <Menu menu={toggleMenu}></Menu> : ''}

            <div className={styles.header}>
                <p className={styles.comix}>comix</p>

                <button onClick={toggleMenu} className={styles.menu}>
                    menu
                </button>
            </div>
        </>
    );
}
