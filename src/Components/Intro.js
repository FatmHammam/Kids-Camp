import styles from '../Assets/Styles/Intro.module.scss';

function Intro() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.headline}>
                    <h1>Play , Learn and grow together</h1>
                    <h3></h3>
                </div>
                <div className={styles.details}>
                    <p className={styles.literacy}>Coding is the new literacy</p>
                    <p>According to a research from NASA, the kids creativity is at its peak during this age i.e 6-14. “NOW” is the perfect time to introduce your kid to the coding culture .</p>
                </div>
                <button>Schedule a Demo class</button>

            </div>
        </div>
    );
}

export default Intro;