import styles from './LinkIcons.module.css'

const LinkIcons = () => {
    return (
        <div className={styles.linkIcons}>
            <div className={styles.container}>
                <a href='https://linkedin.com/in/talha-iqbal-80b91523b'><img src='/public/img/lang-img/LinkedIn Logo.svg' /></a>
                <a href='https://github.com/TalIQ501'><img src='/public/img/lang-img/GitHub Logo.svg' /></a>
            </div>
        </div>
    );
}
 
export default LinkIcons;