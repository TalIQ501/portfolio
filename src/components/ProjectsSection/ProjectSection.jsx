import jsonData from '../../../data/projects.json';
import ProjectLink from './ProjectLink/ProjectLink';

import styles from './ProjectSection.module.css';

const ProjectSection = () => {
    const { projects } = jsonData;

    return (
        <div className={styles.projectSection} id='project-section'>
            {Object.entries(projects).map(([projectName, projectData]) => (
                <div key={projectName} className={styles.project}>
                    <ProjectLink 
                        project={projectName} 
                        thumb={projectData.thumbnail} 
                        link={projectData.link}
                    />
                </div>
            ))}
        </div>
    );
}

export default ProjectSection;