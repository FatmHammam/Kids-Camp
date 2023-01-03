import Flip from 'react-reveal/Flip';
import styles from '../Assets/Styles/Conclusion.module.scss';

function Conclusion() {

    return (
        <div className={styles.container}>
            <h3>The new age canvas for kids</h3>

            <div className={styles.subcontainer}>
                <Flip right>
                    <div className={styles.creativity}>
                        <div className={styles.creative}>
                            <div className={styles.content}>
                                <h3>Limitless Creativity</h3>
                                <p>Children learn more easily when they understand what they are learning.
                                    As a result, children end up racking their brains in front of books, memorizing dozens
                                    of formulas for hours until exam day.</p>
                            </div>
                        </div>

                        <div className={styles.creative}>
                            <div className={styles.content}>
                                <h3>Develop A 21st century skill set</h3>
                                <p>Coding fosters important 21st century know-how for students, preparing them for whatever the future has in store.
                                    Learning to code can be easy –and fun!  </p>
                            </div>
                        </div>

                        <div className={styles.creative}>
                            <div className={styles.content}>
                                <h3>Translating ideas into products</h3>
                                <p>Teaching coding for kids can be an immensely rewarding experience,
                                    as it provides kids with an important boost for their future and can enrich their lives. </p>
                            </div>
                        </div>

                    </div>
                </Flip>

                <Flip left>
                    <div className={styles.interaction}>
                        <div className={styles.creative}>
                            <div className={styles.content}>
                                <h3>Enterpreneur ready</h3>
                                <p>Real Programming Language. Added Value to Your Kid's Screen Time.
                                    Try Today for Free. No Experience Needed. Game-Based Learning. Award-Winning Platform.</p>
                            </div>
                        </div>

                        <div className={styles.creative}>
                            <div className={styles.content}>
                                <h3>Futuristic curriculum</h3>
                                <p>A futuristic coding curriculum for schools.
                                    Edtech startup Codevidhya offers school children a coding curriculum that enhances their skills</p>
                            </div>
                        </div>

                        <div className={styles.creative}>
                            <div className={styles.content}>
                                <h3>Live Teacher-Student interaction</h3>
                                <p>Classroom organization refers to the ways teachers help children develop skills to regulate their own behavior,
                                    get the most learning out of each school day </p>
                            </div>
                        </div>
                    </div>
                </Flip>


            </div>

        </div>

    );
}

export default Conclusion;