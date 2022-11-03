// TODO:
// 1. Might need to define isSignUp state here and pass it or the setIsSignUp to Login & CreateAccount to render different things. 


import React, {useState} from "react"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

import NavHeader from "./NavHeader"
import CreateAccount from "./CreateAccount"

const LandingPage = ({user, setUser, setIsSignUp}) => {
    const [modalShow, setModalShow] = React.useState(false);

    const handleClick = () => {
        setModalShow(true)
        setIsSignUp(true)
    }
    console.log(user,'user')
    return (
        <div className="landingpage">
            <NavHeader user={user} setIsSignUp={setIsSignUp} />

            <div className="landingpage-content">
                <h1>Find The Right One, Right Here, Right Now</h1>
                <ThemeProvider prefixes={{ btn: 'createAcc-button'}}>
                    <Button onClick={handleClick}>Create Account</Button>
                </ThemeProvider>
            </div>

            <CreateAccount setUser={setUser} show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    )
}

export default LandingPage
