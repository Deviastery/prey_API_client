import Navigation from '../../components/DocPage/Navigation';
import Documentation from '../../components/DocPage/Documentation';

import styles from './DocPage.module.css';

const DocPage = () => {

    function scrollToSection (to) {
        const section = document.getElementById(to);
        console.log(section);
        section.scrollIntoView({ behavior: 'smooth'});
    }

    return (
        <>
            <div className={styles.wrapper}>            
                <Navigation 
                    scrollToSection={scrollToSection}
                />
                <Documentation />
            </div>
        </>
    )
}

export default DocPage;