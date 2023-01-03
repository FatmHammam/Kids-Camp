import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faRobot, faClock, faComputer } from '@fortawesome/free-solid-svg-icons'
import styles from '../Assets/Styles/Program.module.scss'
// faRobot , faFlask , faClock , faComputer , faUsd, faUser
function Program() {
    return (
        <div className={styles.container}>
            <h1>Our Main Topics</h1>
            <div className={styles.program}>
                <div className={styles.science}>
                    <div className={styles.iconContainer}>
                        <FontAwesomeIcon icon={faLightbulb} className={styles.icon} size="xl" color='#fff' />
                    </div>
                    <div className={styles.row}>
                        <h2>Edison</h2>
                        <p>Time for serious coding! Kids learn JS/HTML.
                            Create their own apps and websites. They will build chatbots,
                            using AI technology, and improve algorithmic thinking.</p>
                    </div>
                </div>
                <div className={styles.science}>
                    <div className={styles.iconContainer}>
                        <FontAwesomeIcon icon={faClock} className={styles.icon} size="xl" color='#fff' />
                    </div>
                    <div className={styles.row}>
                        <h2>Einstein</h2>
                        <p>Introduce Kids to the world of code! They learn the basics of code.
                            Watch their creativity unlock by the end of this Program. Unleash
                            the hidden creator in your kid!</p>
                    </div>
                </div>
                <div className={styles.science}>
                    <div className={styles.iconContainer}>
                        <FontAwesomeIcon icon={faRobot} className={styles.icon} size="xl" color='#fff' />
                    </div>
                    <div className={styles.row}>
                        <h2>Tesla</h2>
                        <p>Watch your kids create their own apps!
                            Publish them on Playstore and watch their problem solving logical reasoning
                            abilities surge. They also start working with AI.</p>
                    </div>

                </div>
                <div className={styles.science}>
                    <div className={styles.iconContainer}>
                        <FontAwesomeIcon icon={faComputer} className={styles.icon} size="xl" color='#fff' />
                    </div>
                    <div className={styles.row}>
                        <h2>CLASS 3</h2>
                        <p>Introduce Kids to the world of CODE!</p>
                    </div>
                </div>
                <div className={styles.science}>
                    <div className={styles.iconContainer}>
                        <FontAwesomeIcon icon={faComputer} className={styles.icon} size="xl" color='#fff' />
                    </div>
                    <div className={styles.row}>
                        <h2>CLASS 4</h2>
                        <p>Introduce your kid to the world of CODE!</p>
                    </div>
                </div>
                <div className={styles.science}>
                    <div className={styles.iconContainer}>
                        <FontAwesomeIcon icon={faComputer} className={styles.icon} size="xl" color='#fff' />
                    </div>
                    <div className={styles.row}>
                        <h2>CLASS 5</h2>
                        <p>Introduce Kids to the world of CODE!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Program;