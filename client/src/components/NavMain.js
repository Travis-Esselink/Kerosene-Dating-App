import AppLogo from "../images/two-hearts-48.png";
import MatchLogo from "../images/matches-icon3.png";
import { Link, useNavigate } from "react-router-dom";



const HomeNav = ({display}) => {
    return (
        <>
            <div className="base navBar space-evenly">
                <Link to='/home/main'>
                    <img src={AppLogo} className={display==='main' ? 'selected' : ''}/>
                </Link>
                <Link to='/home/matches'>
                    <img src={MatchLogo} className={display==='matches' ? 'selected' : ''}/>
                </Link>
            </div>
        </>
    )
}

export default HomeNav