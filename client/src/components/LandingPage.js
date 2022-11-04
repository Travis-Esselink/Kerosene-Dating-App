import React, {useState} from "react"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

import NavHeader from "./NavHeader"
import CreateAccount from "./CreateAccount"

const LandingPage = ({user, setUser}) => {
    const [modalShow, setModalShow] = React.useState(false);

    const handleClick = () => {
        setModalShow(true)
    }

    return (
        <div className="landingpage">
            <NavHeader setUser={setUser} user={user} />

            <div className="landingpage-content">
                <h1>It all Ignites with a Match</h1>
                <ThemeProvider prefixes={{ btn: 'createAcc-button'}}>
                    <Button onClick={handleClick}>Create Account</Button>
                </ThemeProvider>
            </div>

            <CreateAccount setUser={setUser} show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    )
}

export default LandingPage
