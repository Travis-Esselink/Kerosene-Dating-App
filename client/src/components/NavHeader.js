import AppLogo from "../images/datingAppLogo.png";
import {Link} from "react-router-dom"

const NavHeader = ({setShowModal, setIsSignUp}) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    return (
        <nav>
            <div className="logo-container">
                <Link to="/"><img className="logo" src={AppLogo} alt="App Logo" /></Link>
            </div>
            <button className="login-button" onClick={handleClick}>Log in</button>
        </nav>
    )
}

export default NavHeader

// 2. When I click on Login button, means:
//  - show the pop-up -> setShowModal(true)
//  - the user has ady created an account. -> setIsSignUp(false)