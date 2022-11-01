import React, {useState} from "react"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

import NavHeader from "./NavHeader"
import CreateAccount from "./CreateAccount"

// import SignInOutModal from "./SignInOutModal"

const LandingPage = () => {
    const [modalShow, setModalShow] = React.useState(false);

    const handleClick = () => {
        setModalShow(true)
    }

    return (
        <div className="landingpage">
            <NavHeader />

            <div className="landingpage-content">
                <h1>Find The Right One, Right Here, Right Now</h1>
                <ThemeProvider prefixes={{ btn: 'createAcc-button'}}>
                    <Button onClick={handleClick}>Create Account</Button>
                </ThemeProvider>
            </div>

            <CreateAccount show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    )
}

export default LandingPage
