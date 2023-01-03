import { useSelector } from "react-redux";
import store from "../Redux/Reducer";
import styles from '../Assets/Styles/GetEnrolledClasses.module.scss';

function GetEnrolledClasses() {
    const enrolledClasses = useSelector(state => state.EnrolledClasses);
    // console.log(enrolledClasses)
    // let List = enrolledClasses[0] ? enrolledClasses[0] : enrolledClasses

    const removeIndividualClass = "REMOVE_INDIVIDUAL_CLASS";


    const removeClass = (classToRemove) => {
        // console.log(classToRemove)
        let filteredArr = enrolledClasses.filter((item, index) => item !== classToRemove);
        console.log(filteredArr);
        store.dispatch({
            type: removeIndividualClass,
            payload: filteredArr
        })
    }


    return (
        <div>
            {
                !enrolledClasses ? <p style={{ color: "#000" }}>No Enrolled Classes Yet</p>
                    :
                    <div className={styles.container}>
                        {
                            enrolledClasses.map((item, index) => {
                                return (
                                    <div key={index} className="card"
                                        style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", width: "280px", backgroundColor: "#07b8c9", border: "2px solid #fff", margin: "10px 20px", backgroundColor: "#FFF", marginBottom: "10px" }}>
                                        <div className="card-body" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }}>
                                            <h5 className="card-title" style={{ fontSize: "18px", fontFamily: "arial", textAlign: 'center' }}>{item[0][0]}</h5>
                                            <p className="card-text" style={{ fontSize: "14px", fontFamily: "arial", textAlign: 'center' }}>{item[0][1]}</p>
                                            <p className="card-text"
                                                style={{ width: "90%", fontFamily: "Arial", fontFamily: "arial", textAlign: "center", margin: "auto", fontSize: "10px" }}
                                            >{item[0][2]}</p>
                                            <button className="btn btn-primary" type="button"
                                                style={{ margin: "15px", backgroundColor: "#07b8c9" }}
                                                onClick={(e) => {
                                                    removeClass(item)
                                                }}>Remove</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
            }
        </div>
    );
}

export default GetEnrolledClasses;