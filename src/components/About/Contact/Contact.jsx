import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import LinkIcons from '../../LinkIcons/LinkIcons';

import styles from './Contact.module.css';

const Contact = () => {
    const { darkTheme } = useContext(ThemeContext)

    return (
        <div className={`${styles.contact} ${darkTheme ? styles.dark : ""}`}>
            <div className={styles.container}>
                <h2>Contact Me</h2>
                <LinkIcons />
            </div>
        </div>
    );
}
 
export default Contact;