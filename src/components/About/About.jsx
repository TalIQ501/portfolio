import Contact from './Contact/Contact';
import AboutMe from './AboutMe.jsx/AboutMe';

import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.about}>
            <AboutMe />
            <Contact />
        </div>
    );
}
 
export default About;