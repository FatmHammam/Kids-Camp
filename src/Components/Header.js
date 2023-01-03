import { Nav, Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/Images/logo.png";
import styles from '../Assets/Styles/Header.module.scss';

function Header() {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login");
    }
    const goHome = () => {
        navigate("/");
    }
    const goToProgramms = () => {
        navigate("/programms");
    }
    const goToClasses = () => {
        navigate("/enrolledClasses");
    }


    return (
        <Navbar expand="md" fixed="top" className={styles.container}>
            <Container>
                <Navbar.Brand href="/" style={{ padding: 0 }}>
                    <img src={logo} className={styles.logo} />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-center">
                    <Nav className={styles.nav}>
                        <Nav.Link onClick={goHome}><p>Home</p></Nav.Link>
                        <Nav.Link onClick={goToProgramms}><p>Programms</p></Nav.Link>
                        <Nav.Link onClick={goToClasses}><p>Enrolled Classes</p></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-center">
                    <Nav className={styles.nav}>
                        <button onClick={goToLogin}>Login</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;