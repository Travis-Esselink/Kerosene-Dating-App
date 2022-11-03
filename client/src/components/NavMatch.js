import BackButton from "../images/back.png"
import MessageButton from "../images/message.png"
import ProfileButton from "../images/profile.png"



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
                <img src={BackButton} onClick={navBack}/>
                <img src={ProfileButton} onClick={displayProfile} className={tab==='profile' ? 'selected' : ''}/>
                <img src={MessageButton} onClick={displayMessages} className={tab==='messages' ? 'selected' : ''}/>
            </div>
        </>
    )
}

export default NavMatch