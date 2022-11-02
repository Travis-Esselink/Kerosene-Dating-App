import AppLogo from "../images/datingAppLogo.png";
import {useState} from "react"
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

import Login from "./Login"

const NavHeader = ({user, setIsSignUp}) => {
    const [modalShow, setModalShow] = useState(false);
    // const [user, setUser] = useState(initialUser); // TO DE DELETED!!! **
    // if there is a loggedin User, login button disappear.
    // If user is loggedin , then no need to see the login button. 
    // If no user log in (user = false), show login button
    // **ACTUALLY, need to pass in the user as props to NavHeader so i dont need to setup the state here.

    const handleClick = () => {
        setModalShow(true)
        setIsSignUp(false)
    }

    return (
        <>
        <nav>
            <div className="logo-container">
                <Link to="/home"><img className="logo" src={AppLogo} alt="App Logo" /></Link>
            </div>

            { !user && 
            <ThemeProvider prefixes={{ btn: 'login-button'}}>
                    <Button onClick={handleClick}>Login</Button>
            </ThemeProvider>
            }
        </nav>
        <Login show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default NavHeader