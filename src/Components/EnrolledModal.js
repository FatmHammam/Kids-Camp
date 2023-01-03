import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Rotate from 'react-reveal/Rotate';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import styles from '../Assets/Styles/LabOrCourse.module.scss'
import LabOrCourse from './LabOrCourse';

function EnrolledModal(props) {
  const [back, setBack] = useState(false);
  const navigate = useNavigate();

  const goBack = () => {
    setBack(true);
  }

  return (
    <>
      {!back ? <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Rotate top left>
          <Modal.Header style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Modal.Title>
              <div className={styles.header}>
                <p >Already Enrolled</p>
                <FontAwesomeIcon icon={faCheckCircle} size="xl" color='darkgreen' className={styles.icon} />
              </div>
            </Modal.Title>
          </Modal.Header>

          <Modal.Dialog >
            <Modal.Body className={styles.body}>
              <ul>
                <li>You can check your Enrolled classes from
                  <a href="/" > Enrolled Classes</a>
                </li>
                <li>An email will be sent to you with the details of the class once the patch is completed</li>
                <li>The patch will be completed within 14 days from now </li>
              </ul>
            </Modal.Body>

            <Modal.Footer className={styles.footer}>
              <Button variant="secondary" onClick={goBack}>Back</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Rotate>
      </div> :
        <LabOrCourse />
      }
    </>
  );
}

export default EnrolledModal;