// NEED TO DO:
// If registered successfully:
// render accountSetup page
// Need to pass setUser here?
// show existed username error first before password not matched.
// if password not matched, retain the fields.username

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import BrandLogo from "../images/two-hearts-48.png"
import DownloadAppLogo from "../images/app-store.png"

const initialState = { username: '', password: '', confirmPassword: '' }

const CreateAccount = (props) => {
    const [fields, setFields] = useState(initialState) // only for this compo
    const [errorPassword, setErrorPassword] = useState(null) // only for this compo
    const [errorRegister, setErrorRegister] = useState(null) // only for this compo
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { name, value } = event.target
        setFields({
          ...fields,
          [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const res = await fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fields)
        })
        const data = await res.json()
        if (res.status === 403) {
            setErrorRegister(data)
            console.log(data + "Test Fails Registered");
        } else if (res.status === 400) {
            setErrorPassword("Passwords are not matched", data)
            setFields({
                ...fields,
                password: "",
                confirmPassword: "",
            })
        } else if (res.status === 200) {
            setErrorRegister(null)
            // props.setUser(data) // the user's obj
            // navigate('/v1/profiles/${data.id}')
            console.log("Test Registered!");
        }
        setFields(initialState)
    }
        // if (fields.password !== fields.confirmPassword) {
        //     setErrorPassword("Passwords are not matched")
        //     setFields({
        //         ...fields,
        //         password: "",
        //         confirmPassword: "",
        //     })
        // } else {
        //     setErrorPassword(null)
        //     const res = await fetch('/register', {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(fields)
        //     })
        //     const data = await res.json()
        //     if (res.status === 403) {
        //         setErrorRegister(data)
        //         console.log(data + "Test Fails Registered");
        //     } else if (res.status === 200) {
        //         setErrorRegister(null)
        //         // props.setUser(data) // the user's obj
        //         // navigate('/v1/profiles/${data.id}')
        //         console.log("Test Registered!");
        //     }
        //     setFields(initialState)
        // }
    //}

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                <img src={BrandLogo} alt="BrandLogo" />
                Create an Account
                </Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <p>By clicking Create Account, you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                    <Form.Control 
                        type="text" 
                        name="username"
                        onChange={handleChange}
                        value={fields.username}
                        placeholder="Username" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Control 
                        type="password" 
                        name="password"
                        onChange={handleChange}
                        value={fields.password}
                        placeholder="Password" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                    <Form.Control 
                        type="password" 
                        name="confirmPassword"
                        onChange={handleChange}
                        value={fields.confirmPassword}
                        placeholder="Confirm Password" />
                    </Form.Group>
                    
                    {errorPassword && <p>{errorPassword}</p>}
                    {errorRegister && <p>{errorRegister}</p>}
                    
                    <ThemeProvider prefixes={{ btn: 'createAcc-button'}}>
                    <Button type="submit">
                        Create Account
                    </Button>
                    </ThemeProvider>

                </Form>
            </Modal.Body>
            <Modal.Footer>
            <h4>Get the App</h4>
            <br />
            <div className="logo-container">
                <img className="logo" src={DownloadAppLogo} alt="Download App Logo" />
            </div>
            </Modal.Footer>
        </Modal>        
    )
}

export default CreateAccount