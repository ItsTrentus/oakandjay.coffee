import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <header>
            <nav className={styles.nav}>
                <div className={styles.logo}>Oak & Jay Craft Coffee</div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/menu">Menu</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
