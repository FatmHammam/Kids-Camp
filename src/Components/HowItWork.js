import Flip from 'react-reveal/Flip';
import Jello from 'react-reveal/Jello';
import boyAvatar from "../Assets/Images/boyAvatar.png"
import schedule from "../Assets/Images/schedule.jpg"
import demo from "../Assets/Images/demo.png"
import styles from '../Assets/Styles/HowItWork.module.scss'

function HowItWork() {
    return (
        <div className={styles.container}>
            <h1>So, How does this work ?</h1>

            <div className={styles.explaination} >
                <Flip left>
                    <div className={styles.enrollment}>
                        <h3>Enroll for a FREE demo class</h3>
                        <div className={styles.enroll}>
                            <hr></hr>
                            <img src={boyAvatar} alt="" style={{ width: "100px", height: "100px", backgroundColor: "#fff" }} />
                            <hr></hr>
                        </div>
                        <p>Your kid will get an overview of what he’ll be learning throughout
                            the course. The coach will take your kid in an amazing learning experience where the kid will be
                            introduced to the concepts of Coding and Artificial Intelligence.</p>
                    </div>
                </Flip>

                <Jello>
                    <div className={styles.scheduleing}>
                        <h3>Schedule your class</h3>
                        <div className={styles.enroll}>
                            <hr></hr>
                            <img src={schedule} alt="" style={{ width: "100px" }} />
                            <hr></hr>
                        </div>
                        <p>This is an online teaching platform and we always believe in the flexibility of our students.
                            So we let you decide the time of your class.
                            You just have to schedule your class and sit back. A coach will be waiting for you at the desired time.</p>
                    </div>
                </Jello>


                <Flip right>

                    <div className={styles.demonstration}>
                        <h3>And finally Demo class!</h3>
                        <div className={styles.enroll}>
                            <hr></hr>
                            <img src={demo} alt="" style={{ width: "100px", height: "100px" }} />
                            <hr></hr>
                        </div>
                        <p>There you are - in your Demo class. It’s that simple. Enroll, schedule and wait for your class.
                            In the demo class the coach will give an overview of all the concepts the student
                            will be learning in the program. It will be a 1:1 teacher - student live video class.</p>
                    </div>
                </Flip>

            </div>
        </div>
    );

}

export default HowItWork;