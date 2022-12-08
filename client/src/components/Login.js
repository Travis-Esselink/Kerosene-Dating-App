

import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import BrandLogo from "../images/two-hearts-48.png"
import DownloadAppLogo from "../images/app-store.png"

const initialState = { username: '', password: '' }

const Login = ({show, onHide, setUser }) => {
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
            setUser(data)
            navigate('/home/main')
        }
        setFields(initialState)
    }

    return (
        <Modal
        show={show}
        onHide={onHide}
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
                {error && <Form.Text className="text-muted">{error.msg}</Form.Text>}
                </Form.Group>

                <ThemeProvider prefixes={{ btn: 'createAcc-button'}}>
                <Button type="submit">
                    Login
                </Button>
                </ThemeProvider>

            </Form>
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