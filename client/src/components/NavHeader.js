import AppLogo from "../images/datingAppLogo.png";
import {useState} from "react"
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

import Login from "./Login"

const NavHeader = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
        <nav>
            <div className="logo-container">
                <Link to="/"><img className="logo" src={AppLogo} alt="App Logo" /></Link>
            </div>
            <ThemeProvider prefixes={{ btn: 'login-button'}}>
                    <Button onClick={() => setModalShow(true)}>Login</Button>
            </ThemeProvider>
        </nav>
        <Login show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}
                

export default NavHeader