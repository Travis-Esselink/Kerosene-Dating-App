import AppLogo from "../images/two-hearts-48.png";
import CrossLogo from "../images/cross-48.png";



const HomeNav = ({display, handleNavClick}) => {

const displayMain = () => {
    handleNavClick('main')
}
const displayMatches = () => {
    handleNavClick('matches')
}

    return (
        <>
            <div className="base-nav">
                <img src={AppLogo} onClick={displayMain} className={display==='main' ? 'selected' : ''}/>
                <img src={CrossLogo} onClick={displayMatches} className={display==='matches' ? 'selected' : ''}/>
            </div>
        </>
    )
}

export default HomeNav