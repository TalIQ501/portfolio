import FlipCard from '../FlipCard/FlipCard'
import jsonData from '../../../data/db.json'

import styles from './SkillSection.module.css'

const SkillSection = () => {
    const { skills } = jsonData;

    return (
        <section className={styles.skillSection} id='skill-section'>
            {Object.entries(skills).map(([category, skillsList]) => (
                <div key={category} className={styles.category}>
                    <h2 className={styles.categoryTitle}>{category}</h2>
                    <div className={styles.categoryGrid}>
                        {Object.entries(skillsList).map(([skillName, skillData]) => (
                            <FlipCard
                                key={skillName}
                                skillName={skillName}
                                details={skillData.details}
                                imageUrl={skillData.image}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default SkillSection;