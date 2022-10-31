import {useState} from "react-router-dom"
import NavHeader from "./NavHeader"
import CreateAccount from "./CreateAccount"

const LandingPage = () => {
    const [isSignUp, setIsSignUp] = useState(true)

    return (
        <div className="landingpage">
            <NavHeader />

            <div className="landingpage-content">
                <h1>Find The Right One, Right Here, Right Now</h1>
                <button className="createAcc-button">Create Account</button>
            </div>

            { isSignUp ? <CreateAccount setIsSignUp={setIsSignUp} /> : <Login setIsSignUp={setIsSignUp} git />}
            
        </div>
    )
}

export default LandingPage

// show the modal for register or login

// Assume all users are not our users-> SignUp: true. once click on login button, setSignUp to false 
//  - if isSignUp is true, then bring up the register form.
//  - if isSignUp is false, then bring up the login form
// Either register or login, once clicked, bring up the form modal. modal: true or false?
