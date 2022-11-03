import AppLogo from "../images/datingAppLogo.png";
import {useState} from "react"
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

import Login from "./Login"

const NavHeader = ({user, setUser}) => {
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true)
    }

    return (
        <>
        <nav>
            <div className="logo-container">
                <Link to="/home/main"><img className="logo" src={AppLogo} alt="App Logo" /></Link>
            </div>

            { user &&
                <ThemeProvider prefixes={{ btn: 'login-button' }}>
                <Button onClick={handleClick}>Login</Button>
                </ThemeProvider>
            }

        </nav>
        <Login setUser={setUser} show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default NavHeader