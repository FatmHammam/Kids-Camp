import study from '../Assets/Images/study.jpg'
import linkedin from '../Assets/Images/linkedin.png'
import face from '../Assets/Images/face.png'
import you from '../Assets/Images/you.png'
import twi from '../Assets/Images/twi.png'
import styles from '../Assets/Styles/Footer.module.scss'

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <img src={study} alt="" />

                <div className={styles.info}>
                    <div className={styles.input}>
                        <input type="text" placeholder='Write Your Email' />
                        <button>Subscribe now!</button>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.partner}>
                            <h3>Partnership</h3>
                            <p>Websites</p>
                            <p>Social media</p>
                            <p>Branding</p>
                        </div>
                        <div className={styles.about}>
                            <h3>About</h3>
                            <p>Our Programms</p>
                            <p>Careers</p>
                        </div>
                        <div className={styles.support}>
                            <h3>Support</h3>
                            <p>Support request</p>
                            <p>Contact</p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className={styles.copyRights}>
                        <div className={styles.resereved}>
                            <p>All rights reserved <span>2023</span></p>
                        </div>
                        <div className={styles.brands}>
                            <div className={styles.img}>
                                <img src={twi} alt="" />
                            </div>
                            <div className={styles.img}>
                                <img src={face} alt="" />
                            </div>
                            <div className={styles.img}>
                                <img src={linkedin} alt="" />
                            </div>
                            <div className={styles.img}>
                                <img src={you} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;