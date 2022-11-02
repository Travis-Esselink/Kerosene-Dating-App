import AppLogo from "../images/two-hearts-48.png";
import CrossLogo from "../images/cross-48.png";
import { Link, useNavigate } from "react-router-dom";



const HomeNav = ({display}) => {
    return (
        <>
            <div className="base navBar space-evenly">
                <Link to='/home/main'>
                    <img src={AppLogo} className={display==='main' ? 'selected' : ''}/>
                </Link>
                <Link to='/home/matches'>
                    <img src={CrossLogo} className={display==='matches' ? 'selected' : ''}/>
                </Link>
            </div>
        </>
    )
}

export default HomeNav