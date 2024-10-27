import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import ScrollToElement from '../../func/ScrollToElement'

import styles from './Navbar.module.css'

const Navbar = () => {
    const { darkTheme, toggleTheme } = useContext(ThemeContext);
    const aboutSec = document.getElementById('about');
    const projectSec = document.getElementById('project-section');
    const skillSec = document.getElementById('skill-section');

    return (
        <nav className={`${styles.navbar} ${darkTheme ? styles.navbarDark: ""}`}>
            <div className={styles.navbarLogo}>
                <h1>TalIQ501</h1>
            </div>
            <div className={styles.buttonContainer}>
                <ul className={styles.buttonList}>
                    <li className={styles.buttonItem}>About</li>
                    <li className={styles.buttonItem}>Projects</li>
                    <li className={styles.buttonItem}>Skills</li>   
                </ul>
            </div>
            <div className={styles.links}>
                <div className="links-container">

                </div>
            </div>
            <button className={`${styles.toggleButton} ${darkTheme ? styles.toggleButtonDark : styles.toggleButtonLight}`} onClick={toggleTheme}>Toggle Dark Mode</button>
        </nav>
    );
}

export default Navbar;