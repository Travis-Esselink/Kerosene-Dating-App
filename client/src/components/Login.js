// NEED TO DO:
// If login successfully:
// render accountSetup page
// Need to pass setUser here?

import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import BrandLogo from "../images/two-hearts-48.png"
import DownloadAppLogo from "../images/app-store.png"

const initialState = { username: '', password: '' }

const Login = (props) => {
    const [fields, setFields] = useState(initialState)
    const [error, setError] = useState(null)
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
        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fields)
        })
        const data = await res.json()
        if (res.status === 401) {
            setError(data) // {msg: 'Incorrect username or password'}
        } else if (res.status === 200) {
            setError(null)
            // props.setUser(data) // { id, username }
            // navigate('/v1/profiles')
            console.log("Test Logged In!");
        }
        setFields(initialState)
    }

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
            GET STARTED
            </Modal.Title>
        </Modal.Header>
            
        <Modal.Body>
            <p>By clicking Login, you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
            <form onSubmit={handleSubmit}>
            <label htmlFor="login-username">Username: </label>
            <input
            name="username"
            id="login-username"
            onChange={handleChange}
            value={fields.username}
            type="text" />

            <label htmlFor="login-password">Password</label>
            <input
            onChange={handleChange}
            value={fields.password}
            name="password"
            id="login-password"
            type="Password" />
            <input type="submit" value="Login" />
            {error && <p>{error.msg}</p>}
        </form>
        </Modal.Body>
            <Modal.Footer>
            <h4>Get the App</h4>
            <div className="logo-container">
                <img className="logo" src={DownloadAppLogo} alt="Download App Logo" />
            </div>
            </Modal.Footer>
        </Modal> 
    )
}

export default Login