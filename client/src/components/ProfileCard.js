// Need to insert this compo to Swipe & UserProfile


import Card from 'react-bootstrap/Card';

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

    return (
        <div className="card-container">
        <Card className="border-0">
            <>
            <div className="profilecard-carousel">
                <ImageCarousel userProfile={userProfile} key={userProfile._id+"carouselImage"}/>
            </div>
            </>
            <Card.Body>
                <div className="user-name-age">
                <Card.Title>{userProfile.displayName}</Card.Title>
                <Card.Title>{calculateAge(userProfile.dateOfBirth)}</Card.Title>
                </div>
                <Card.Text>{userProfile.bio}</Card.Text>
            </Card.Body>
        </Card>
        </div>  
    )
}

export default ProfileCard
