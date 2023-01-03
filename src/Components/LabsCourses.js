import styles from '../Assets/Styles/LabsCourses.module.scss'
import { useSelector, useDispatch } from "react-redux";
import Zoom from 'react-reveal';
import { useNavigate } from "react-router-dom";
import store from '../Redux/Reducer';
import { useState } from 'react';

function LabsCourses() {
    const allLabs = useSelector(state => state.Labs);
    const allCourses = useSelector(state => state.Courses);
    const navigate = useNavigate();
    const [flag, setFlage] = useState(false);
    const goToCourse = "GO_TO_Course"

    const printName = (obj) => {
        for (var i = 0; i < allLabs.length; i++) {
            if (allLabs[i].name === obj.name) {
                store.dispatch({
                    type: goToCourse,
                    payload: obj
                })
                navigate("/singleLab");
            }
        }

        for (var j = 0; j < allCourses.length; j++) {
            if (allCourses[j].name === obj.name) {
                store.dispatch({
                    type: goToCourse,
                    payload: obj
                })
                navigate("/singleLab");
            }
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.headers}>
                    <button className="btn btn-info" onClick={() => setFlage(false)}> Labs</button>
                    <button className="btn btn-info" onClick={() => setFlage(true)}>  Courses</button>
                </div>
                <div className={styles.custom}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" >
                        <path d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z" className="shape-fill" ></path>
                    </svg>
                </div>
            </div>
            <div className={styles.learning}>
                <div className={styles.section}>
                    {
                        !flag ? <div className={styles.labs} >
                            {
                                allLabs.map((lab, index) => {
                                    return (
                                        <Zoom left key={index}>
                                            <div className={styles.lab} onClick={() => printName(lab)}>
                                                <div className={styles.img}>
                                                    <img src={lab.imageSrc} alt="" />
                                                </div>
                                                <div className={styles.extend}>
                                                    <div className={styles.name}>
                                                        <h3>{lab.name}</h3>
                                                        <p>{lab.discription}</p>
                                                    </div>

                                                </div>
                                                <button className='btn btn-info'>More Details</button>
                                            </div>
                                        </Zoom>
                                    )
                                })
                            }
                        </div>
                            :
                            <div className={styles.courses} >
                                {
                                    allCourses.map((course, index) => {
                                        return (
                                            <Zoom right key={index}>
                                                <div className={styles.course} onClick={() => printName(course)}>
                                                    <div className={styles.img}>
                                                        <img src={course.imageSrc} alt="" />
                                                    </div>
                                                    <div className={styles.extend}>
                                                        <div className={styles.name}>
                                                            <h3>{course.name}</h3>
                                                            <p>{course.discription}</p>
                                                        </div>
                                                    </div>
                                                    <button className='btn btn-info'>More Details</button>
                                                </div>
                                            </Zoom>
                                        )
                                    })
                                }
                            </div>
                    }
                </div>
            </div>

        </div >
    );
}

export default LabsCourses;       