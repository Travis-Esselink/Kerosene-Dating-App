import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
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
            <p>Testing first</p>
        )}
        </>
    )
}

export default UserProfile


