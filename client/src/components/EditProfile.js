import { useState, useEffect } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Loading from './Loading'
import NavHeader from "./NavHeader"
import { useNavigate } from 'react-router-dom';
import ImgEdit from './ImgEdit'


const EditProfile = ({user, setUser, userFetched}) => {
    const [errorImages, setErrorImages] = useState(false) // only for this compo
    const [errorAgeRange, setErrorAgeRange] = useState(false) // only for this compo
    const [userData, setUserData] = useState(null) // get from App.js
    const [images,setImages] = useState(null)
    const [chars, setChars] = useState(250)
    useEffect(() => {
        if (user) {
            setUserData({...user})
            setImages([...user.images])
            setChars({...user}.bio.length)
        }
    },[user])


    const navigate = useNavigate()
     // the user obj
    // Handling number of images uploaded
    const handleSelect = (event) => {
        if (event.target.files.length > 6-images.length ) {
            event.preventDefault()
            setErrorImages(true)
        } else {
            setErrorImages(false)
        }
    }

    const handleCancel = () => {
        navigate('/profile')
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        // handling ageRange validation
        if (name === "ageRange" && value < 1) {
            setErrorAgeRange(true)
        } else if (name === "bio") {
            setChars(250-value.length)
        } else {
            setErrorAgeRange(false)
        }
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const res = await fetch (`/v1/profiles/${user._id}`, {
            method: "PUT",
            body: formData
        })
        const data = await res.json()
        setUser(data)
        navigate('/profile')
    }

    const formatDate = (dateStr) => {
        if (!dateStr) {
            return ''
        }
        return new Date(dateStr).toISOString().substring(0,10)
    }
    console.log(user)
    return (
        <>
        { !userFetched || userData?.displayName===undefined ? <Loading /> : (
            <>
            <NavHeader />
            <hr />
            <div className="profile-form">
            <h2>{userData.displayName ? "Edit Profile" : "Create an Account" }</h2>
            <br />
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col> {/* xs={7} */}
                        <Form.Group className="mb-3" controlId="displayName">
                        <Form.Label>Preferred Name</Form.Label>
                        <Form.Control 
                            type="text" placeholder="Enter Preferred Name" required 
                            name="displayName" 
                            value={userData.displayName}
                            onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="dateOfBirth">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control 
                            type="date" required
                            name="dateOfBirth" 
                            value={formatDate(userData.dateOfBirth)}
                            onChange={handleChange}
                            />
                        </Form.Group>

                        <fieldset>
                        <Form.Group className="mb-3">
                        <Form.Label as="legend" column sm={2}>
                            Gender
                        </Form.Label>
                        <br />
                            <Form.Check
                            inline type="radio" label="Male" id="male" className="gender-radio"
                            name="gender"
                            value="M"
                            checked={userData.gender === "M" ? true : false}
                            onChange={handleChange}
                            />
                            <Form.Check
                            inline type="radio" label="Female" id="female"
                            name="gender"
                            value="F"
                            checked={userData.gender === "F" ? true : false}
                            onChange={handleChange}
                            />
                        </Form.Group>
                        </fieldset>

                        <fieldset>
                        <Form.Group className="mb-3">
                        <Form.Label as="legend" column sm={4}>
                        Interested in
                        </Form.Label>
                        <br />
                            <Form.Check
                            inline type="radio" label="Male" id="malePref"
                            name="genderPref"
                            value="M"
                            checked={userData.genderPref === "M" ? true : false}
                            onChange={handleChange}
                            />
                            <Form.Check
                            inline type="radio" label="Female" id="femalePref"
                            name="genderPref"
                            value="F"
                            checked={userData.genderPref === "F" ? true : false}
                            onChange={handleChange}
                            />
                            <Form.Check
                            inline type="radio" label="Everyone" id="everyone"
                            name="genderPref"
                            value="FM"
                            checked={userData.genderPref === "FM" ? true : false}
                            onChange={handleChange}
                            />
                        </Form.Group>
                        </fieldset>

                        <Form.Group className="mb-3">
                        <Form.Label as="legend" column sm={4}>
                            Maximum Age Difference
                        </Form.Label>
                        <br />
                        <Form.Control
                            type="number" min="1"
                            name="ageRange" 
                            value={userData.ageRange}
                            onChange={handleChange}
                            />
                        {errorAgeRange && <Form.Text className="text-danger">Age Range has to be atleast 1</Form.Text>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="bio">
                        <Form.Label>Bio:</Form.Label>
                        <Form.Control 
                            as="textarea" rows={3} placeholder="Say a Little About Yourself"
                            name="bio"
                            value={userData.bio}
                            onChange={handleChange}
                            maxlength={250}
                        />
                        </Form.Group>
                        <p className='remaining-chars'>{chars} Characters Remaining</p>
                    </Col>
                
                    <Col>
                    
                    <Form.Group className="position-relative mb-3" controlId="coverImage">
                        <Form.Label>Profile Picture</Form.Label>
                        <Form.Control
                        type="file"
                        name="coverImage"
                        />
                    </Form.Group>
                    <img className="img-edit" src={userData.coverImage}/>
                    <Form.Group className="position-relative mb-3" controlId="images">
                        <Form.Label>Gallery</Form.Label>
                        <Form.Control
                        type="file" multiple
                        name="images"
                        onChange={handleSelect}
                        />
                        {errorImages 
                        ? <Form.Text className="text-danger">Only 6 total images accepted</Form.Text>
                        : <Form.Text className="text-muted">Can choose up to 6 images</Form.Text>
                        }
                    </Form.Group>
                    <div className="images-edit">
                        {images.map((img)=>
                            <ImgEdit image={img} key={img} setImages={setImages}/>
                        )}
                    </div>
                    </Col>
                </Row>

                <ThemeProvider prefixes={{ btn: 'createAcc-button', disabled: '.createAcc-button:disabled'}}>
                    <Button 
                    type="submit"
                    disabled={errorImages} 
                    >
                        Submit
                    </Button>
                </ThemeProvider>
                <ThemeProvider prefixes={{ btn: 'cancel-button'}}>
                    <Button onClick={handleCancel}>
                        Cancel
                    </Button>
                </ThemeProvider>
            </Form>

            </div>
            </>
            )}
        </>
    )
}

export default EditProfile