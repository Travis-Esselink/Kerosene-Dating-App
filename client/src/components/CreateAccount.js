// NEED TO DO:
// If registered successfully:
// render accountSetup page
// Need to pass setUser here?

import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import BrandLogo from "../images/two-hearts-48.png"

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
        if (fields.password !== fields.confirmPassword) {
            setErrorPassword("Passwords are not matched")
        } else {
            setErrorPassword(null)
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
            } else if (res.status === 200) {
                setErrorRegister(null)
                // props.setUser(data) // the user's obj
                // navigate('/v1/profiles/${data.id}')
                console.log("Test Registered!");
            }
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
                Create Account
                </Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <p>By clicking Create Account, you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
                <form onSubmit={handleSubmit}>
                    <input
                    type="text" 
                    name="username"
                    onChange={handleChange}
                    value={fields.username}
                    placeholder="Your Username" />

                    <input
                    type="Password"
                    name="password"
                    onChange={handleChange}
                    value={fields.password}
                    placeholder="Your password" />

                    <input
                    type="Password"
                    name="confirmPassword"
                    onChange={handleChange}
                    value={fields.confirmPassword}
                    placeholder="Confirm Password" />

                    <input type="submit" value="Login" />
                    {errorPassword && <p>{errorPassword}</p>}
                    {errorRegister && <p>{errorRegister}</p>}
                </form>
            </Modal.Body>
            <Modal.Footer>
            <h3>GET THE APP</h3>
            </Modal.Footer>
        </Modal>        
    )
}

export default CreateAccount