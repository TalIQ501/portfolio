import { useContext } from 'react';
import styles from './ProjectLink.module.css';
import { ThemeContext } from '../../../contexts/ThemeContext';

// eslint-disable-next-line react/prop-types
const ProjectLink = ({ project, thumb, link }) => {
    const { darkTheme } = useContext(ThemeContext)

    return (
        <div className={`${styles.project} ${darkTheme ? styles.dark : ""}`}>
            <div className={`${styles.header} ${darkTheme ? styles.dark : ""}`}>
                <div className={styles.container}>
                    <h2>{project}</h2>
                </div>
                <a href={link}>
                    <div className={styles.imgContainer}>
                        <img className={styles.imgProject} src={thumb} alt={`${project} thumbnail`} />
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ProjectLink;
