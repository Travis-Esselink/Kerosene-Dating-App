import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

import NavConsistent from "./NavConsistent"
import Loading from "./Loading"
import ProfileCard from "./ProfileCard"

const UserProfile = ({user, setUser}) => {

    return (
        <> 
        <NavConsistent setUser={setUser} />
        { !user ? <Loading /> : (
            <>
            <ProfileCard userProfile={user} />
            
            <div className="profilebuttons-container">
                <ThemeProvider prefixes={{ btn: 'editprofile-button' }}>
                    <Button variant="editprofile-button"><Link to={`/profile/edit`}>Edit Profile</Link></Button>
                </ThemeProvider>

                
            </div>
            </>
        )}
        </>
    )
}

export default UserProfile


