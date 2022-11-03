import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Carousel from 'react-bootstrap/Carousel';

import MatchNav from "./MatchNav"
import Loading from "./Loading"

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
                    <li>Date of Birth{userData.dateOfBirth}</li>
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


