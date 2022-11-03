// Need to insert this compo to Swipe & UserProfile


import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

import ImageCarousel from "./ImageCarousel"

const formatDate = (dateStr) => {
    return new Date(dateStr).toISOString().substring(0, 10)
}

const calculateAge = (birthday) => {
    const ageDifMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

const ProfileCard = ({userProfile}) => {

    // const allImages = userProfile.coverImage.concat(userProfile.images)

    return (
        <div className="card-container">
        <Card className="border-0">
            <>
            <div className="profilecard-image">
                <ImageCarousel userProfile={userProfile} />
            </div>
            </>
            <Card.Body>
                <div className="user-name-age">
                <Card.Title>{userProfile.displayName}</Card.Title>
                <Card.Title>{calculateAge(userProfile.dateOfBirth)}</Card.Title>
                </div>
                <Card.Text>Date of Birth: {formatDate(userProfile.dateOfBirth)}</Card.Text>
                <Card.Text>Gender: {userProfile.gender}</Card.Text>
                <Card.Text>Age: {calculateAge(userProfile.dateOfBirth)}</Card.Text>
                <Card.Text>Interested In: {userProfile.genderPref === "FM" ? "Everyone" : userProfile.genderPref}</Card.Text>
                <Card.Text>About Me: {userProfile.bio}</Card.Text>
            </Card.Body>
        </Card>
        </div>  
    )
}

export default ProfileCard
