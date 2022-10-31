import AppLogo from "../images/datingAppLogo.png";
import {Link} from "react-router-dom"

const NavHeader = () => {

    const handleClick = () => {
        console.log("Clicked");
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