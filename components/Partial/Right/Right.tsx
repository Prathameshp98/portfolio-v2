import styles from './Right.module.scss';

import About from '@/components/section/About/About';
import Experience from '@/components/section/Experience/Experience';
import Project from '@/components/section/Project/Project';
import Writing from '@/components/section/Writing/Writing';
import Footer from '@/components/section/Footer/Footer';

const Right = () => {

    return (
        <div className={styles.right}>
            <About />
            <Experience />
            <Project />
            <Writing />
            <Footer />
        </div>
    )
}

export default Right;