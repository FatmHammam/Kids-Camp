import { useSelector } from "react-redux";
import Zoom from 'react-reveal';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import styles from '../Assets/Styles/LabOrCourse.module.scss';
import store from "../Redux/Reducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { hover } from "@testing-library/user-event/dist/hover";

function LabOrCourse() {
    const SingleTopic = useSelector(state => state.SingleLabOrCourse);
    const [show, setShow] = useState(false);
    const [showOther, setShowOther] = useState(false);
    const [dataModal, setDataModal] = useState([]);
    const addToEnrolled = "ADD_TO_ENROLLED";
    const navigate = useNavigate();
    const myClasses = []

    const openModal = (data) => {
        setDataModal(data)
        setShow(true)
    }

    const handleClose = () => {
        setShow(false);
        setShowOther(false)
    }

    const goToClasses = () => {
        navigate("/enrolledClasses");
    }

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.intro}>
                    <div className={styles.title}>
                        <h3>{SingleTopic.name}</h3>
                        <p> Age: {SingleTopic.age}</p>
                        <p>{SingleTopic.discription}</p>
                    </div>
                    <Zoom right>
                        <img src={SingleTopic.imageSrc} alt="" />
                    </Zoom>
                </div>
                <div className={styles.classes}>
                    <div className={styles.whatToLearn}>
                        <h3>What you'll learn:</h3>
                        {
                            SingleTopic.whatWillLearn.map((item, index) => {
                                return (
                                    <ul key={index}>
                                        <li>{item}</li>
                                    </ul>
                                )
                            })
                        }

                    </div>
                    <div className={styles.enroll}>
                        {
                            Object.keys(SingleTopic.levels).map((value, index) => {
                                function handleCheckout(event) {
                                    setShowOther(true)
                                    const element = dataModal;
                                    myClasses.push(element);
                                    store.dispatch({
                                        type: addToEnrolled,
                                        payload: myClasses
                                    })
                                }

                                return (
                                    <Zoom left key={index}>
                                        <div className={styles.card} >
                                            <h3>{Object.keys(SingleTopic.levels)[index]}</h3>
                                            <div className={styles.info}>
                                                <h5>{SingleTopic.levels[value][0]}</h5>
                                                <div>
                                                    <p>{SingleTopic.levels[value][1]}</p>
                                                    <p>{SingleTopic.levels[value][2]}</p>
                                                </div>
                                            </div>
                                            <Button variant="primary" onClick={() => openModal(SingleTopic.levels[value])}>
                                                Enroll
                                            </Button>

                                            <Modal show={show} onHide={handleClose} >
                                                <Modal.Header >
                                                    <Modal.Title>{!showOther && dataModal[0]}</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    {!showOther ? <>
                                                        <div className={styles.modalBody}>
                                                            <p>Name : {SingleTopic.name}</p>
                                                            <p>Cost : {dataModal[2]} x 1</p>
                                                        </div>
                                                        <div className={styles.modalBody}>
                                                            <p style={{ fontWeight: "600", color: "#07b8c9" }}>Total : {dataModal[2]}</p>
                                                        </div>
                                                    </> : <div className={styles.success}>
                                                        <div className={styles.saved}>
                                                            <p >You have successfully Enrolled </p>
                                                            <FontAwesomeIcon icon={faCheckCircle} size="xl" color='darkgreen' className={styles.icon} />
                                                        </div>
                                                        <ul>
                                                            <li>You can check your Enrolled classes from
                                                                <a style={{ color: "blue", cursor: "pointer" }} onClick={goToClasses} > Enrolled Classes</a>
                                                            </li>
                                                            <li>An email will be sent to you with the details of the class once the patch is completed</li>
                                                            <li>The patch will be completed within 14 days from now </li>
                                                        </ul>
                                                    </div>

                                                    }

                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="danger" onClick={handleClose}>
                                                        Cancel
                                                    </Button>
                                                    {
                                                        !showOther && <Button variant="success" onClick={dataModal => handleCheckout(dataModal)} >
                                                            Checkout
                                                        </Button>
                                                    }
                                                </Modal.Footer>
                                            </Modal>
                                        </div>
                                    </Zoom>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}

export default LabOrCourse;
