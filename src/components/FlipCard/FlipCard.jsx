import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from './FlipCard.module.css';

// eslint-disable-next-line react/prop-types
const FlipCard = ({ skillName, details, imageUrl = "/img/lang-img/default-logo.svg" }) => {
    const { darkTheme } = useContext(ThemeContext);

    return (
        <div className={styles.container}>
            <div className={`${styles.flipCard}`}>
                <div className={styles.flipCardInner}>
                    <div className={`${styles.flipCardFront} ${darkTheme ? styles.dark : ""}`}>
                        <div className={styles.cardContent}>
                            <h3>{skillName}</h3>
                            <div className={styles.cardImgContainer}>
                                <img 
                                    className={styles.logo} 
                                    src={imageUrl} 
                                    alt={`${skillName} logo`} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.flipCardBack} ${darkTheme ? styles.dark : ""}`}>
                        <div className={styles.cardContent}>
                            {details}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;