
import BackPic from "../images/red-back-button4.png"
import ChatPic from "../images/chatbutton5.png"



const NavMatch = ({match, navBack, displayTab, tab}) => {

    const displayProfile = () => {
        displayTab('profile')
    }
    const displayMessages = () => {
        displayTab('messages')
    }


    return (
        <>
            <div className="top navBar space-between">
                <img src={BackPic} onClick={navBack} id="top-nav-img"/>
                <div className="match-nav-profile-div">
                <img src={match.coverImage} onClick={displayProfile} id="top-nav-img" className={tab==='profile' ? 'selected' : ''}/>
                <p className="nav-match-name">{match.displayName}</p>
                </div>
                <img src={ChatPic} onClick={displayMessages} id="top-nav-img" className={tab==='messages' ? 'selected' : ''}/>
            </div>
        </>
    )
}

export default NavMatch