import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Carousel from 'react-bootstrap/Carousel';

import NavMatch from "./NavMatch"
import Loading from "./Loading"

const UserProfile = ({user}) => {

    return (
        <>
        <NavMatch />
        { !user ? <Loading /> : (
            <>
            <div className="userprofile-container">
                <img className="userprofice-pic" src={user.coverImage} alt={user.username} />
            </div>
            <div className="userprofile-content">
                <h5>{user.displayName}</h5>
                <ul>
                    <li>Preferred Name: {user.displayName}</li> 
                    <li>Date of Birth{user.dateOfBirth}</li>
                    <li>Gender: {user.gender}</li>
                    <li>Interested In: {user.genderPref}</li>
                    <li>About Me: {user.bio}</li>
                </ul>
                <Link to={`/profile/edit`}>Edit Profile</Link>
            </div>
            </>
        )}
        </>
    )
}

export default UserProfile


