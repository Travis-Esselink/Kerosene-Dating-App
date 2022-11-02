// confirm whether onChange is needed for this?


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

import NavHeader from "./NavHeader"

const EditProfile = () => {
    return (
        <>
        <NavHeader />
        <hr />
        <div className="profile-form">
        <h2>Create an Account</h2>
        <br />
        <Form>
            <Row>
                <Col> {/* xs={7} */}
                    <Form.Group className="mb-3" controlId="displayName">
                    <Form.Label>Preferred Name</Form.Label>
                    <Form.Control 
                        type="text" placeholder="Enter Preferred Name" required 
                        name="displayName" 
                        // value={fields.displayName}
                        // onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="dateOfBirth">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control 
                        type="date" required
                        name="dateOfBirth" 
                        // value={fields.dateOfBirth}
                        // onChange={handleChange}
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
                        value="M" // fields.gender = "M" 
                         // onChange={handleChange}
                        />
                        <Form.Check
                        inline type="radio" label="Female" id="female"
                        name="gender"
                        value="F" // fields.gender = "F" 
                         // onChange={handleChange}
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
                        inline type="radio" label="Male" id="male"
                        name="genderPref"
                        value="M" // fields.gender = "M" 
                         // onChange={handleChange}
                        />
                        <Form.Check
                        inline type="radio" label="Female" id="female"
                        name="genderPref"
                        value="F" // fields.gender = "F" 
                         // onChange={handleChange}
                        />
                        <Form.Check
                        inline type="radio" label="Everyone" id="everyone"
                        name="genderPref"
                        value="FM" // fields.gender = "F" 
                         // onChange={handleChange}
                        />
                    </Form.Group>
                    </fieldset>

                    <Form.Group className="mb-3">
                    <Form.Label as="legend" column sm={4}>
                        Maximum Age Difference
                    </Form.Label>
                    <br />
                    <Form.Control
                        type="number" min="0"
                        name="ageRange" 
                        // value={fields.dateOfBirth}
                        // onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="bio">
                    <Form.Label>About Me:</Form.Label>
                    <Form.Control 
                        as="textarea" rows={3} placeholder="Tell about yourself"
                        name="bio"
                        // value={fields.bio}
                        // onChange={handleChange}
                    />
                    </Form.Group>
                </Col>
            
                <Col>
                
                <Form.Group className="position-relative mb-3" controlId="coverImage">
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control
                    type="file"
                    name="coverImage"
                    // onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="position-relative mb-3" controlId="images">
                    <Form.Label>Gallery</Form.Label>
                    <Form.Control
                    type="file" multiple
                    name="images"
                    // onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                    Can choose up to 6 images
                    </Form.Text>
                </Form.Group>
                </Col>
            </Row>

            <ThemeProvider prefixes={{ btn: 'createAcc-button'}}>
                <Button type="submit">
                    Submit
                </Button>
            </ThemeProvider>
        </Form>
        </div>
        </>
    )
}

export default EditProfile

// make the arrow disappear for number selector
// .age-range::-webkit-outer-spin-button,
// .age-range::-webkit-inner-spin-button {
//   -webkit-appearance: none;
//   margin: 0;
// }