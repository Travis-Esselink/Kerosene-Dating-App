import {useState} from "react"

import NavHeader from "./NavHeader"
import CreateAccount from "./CreateAccount"
import Login from "./Login"
import SignInOutModal from "./SignInOutModal"

const LandingPage = () => {
    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(true)
    }

    return (
        <div className="landingpage">
            <NavHeader 
                setShowModal={setShowModal}
                setIsSignUp={setIsSignUp} />

            <div className="landingpage-content">
                <h1>Find The Right One, Right Here, Right Now</h1>
                <button className="createAcc-button" onClick={handleClick}>Create Account</button>
            </div>

            {showModal && (
                    <SignInOutModal setShowModal={setShowModal} isSignUp={isSignUp} />
                )}

        </div>
    )
}

export default LandingPage

// show the modal for register or login

// Assume all users are not our users-> SignUp: true. once click on login button, setSignUp to false 
//  - if isSignUp is true, then bring up the register form.
//  - if isSignUp is false, then bring up the login form
// Either register or login, once clicked, bring up the form modal. modal: true or false?
// { isSignUp ? <CreateAccount setIsSignUp={setIsSignUp} /> : <Login setIsSignUp={setIsSignUp} git />}

// 1. When I click on Create Account button, means:
//  - show the pop-up -> setShowModal(true) 
//  - the user has not created account yet. -> setIsSignUp(true)

// 2. When I click on Login button, means:
//  - show the pop-up -> setShowModal(true)
//  - the user has ady created an account. -> setIsSignUp(false)
