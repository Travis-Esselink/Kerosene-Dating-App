import AppLogo from "../images/datingAppLogo.png";
import {useState} from "react"
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

import Login from "./Login"
import LogoutButton from "./LogoutButton";

const NavHeader = ({user, setUser, setIsSignUp}) => {
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true)
        setIsSignUp(false)
    }

    return (
        <>
        <nav>
            <div className="logo-container">
                <Link to="/"><img className="logo" src={AppLogo} alt="App Logo" /></Link>
            </div>

            <ThemeProvider prefixes={{ btn: 'login-button' }}>
            <Button onClick={handleClick}>Login</Button>
            </ThemeProvider>
            <LogoutButton setUser={setUser} />

        </nav>
        <Login setUser={setUser} show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default NavHeader