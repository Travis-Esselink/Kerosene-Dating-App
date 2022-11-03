import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Carousel from 'react-bootstrap/Carousel';

import MatchNav from "./MatchNav"
import Loading from "./Loading"

// const formatDate = (dateStr) => {
//     return new Date(dateStr).toISOString().substring(0,10)
// }

// const calculateAge = (dateStr) => {
//     const date = new Date(dateStr).toISOString().substring(0,10)
//     const ageDifMs = Date.now() - new Date(date).getTime();
//     const ageDate = new Date(ageDifMs);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

const UserProfile = ({user}) => {
    const [userData, setUserData] = useState({})
    const { id } = useParams()

    console.log(user);
    // console.log(user._id);

    useEffect(() => {
        const getUser = async () => {
          const res = await fetch(`/v1/profiles/${id}`)
          const data = await res.json()
          console.log(data);
          setUserData(data)
        }
        getUser()
      }, [id])

    return (
        <>
        <MatchNav />
        { !userData ? <Loading /> : (
            <>
            <div className="userprofile-container">
                <img className="userprofice-pic" src={userData.coverImage} alt={userData.username} />
            </div>
            <div className="userprofile-content">
                <h5>{userData.displayName}</h5>
                <ul>
                    <li>Preferred Name: {userData.displayName}</li>
                    {/* <li>Age: {calculateAge(userData.dateOfBirth)}</li> */}
                    {/* <li>Date of Birth: {formatDate(userData.dateOfBirth)}</li> */}
                    <li>Gender: {userData.gender}</li>
                    <li>Interested In: {userData.genderPref}</li>
                    <li>About Me: {userData.bio}</li>
                </ul>
                <Link to={`/editprofile`}>Edit Profile</Link>
            </div>
            </>
        )}
        </>
    )
}

export default UserProfile


