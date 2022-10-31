// When isSignUp is true
import { useState } from 'react'
import BrandLogo from "../images/two-hearts-48.png"

const initialState = { username: '', password: '' }

const CreateAccount = () => {
    const [fields, setFields] = useState(initialState)

    const handleChange = (event) => {
        const { name, value } = event.target
        setFields({
          ...fields,
          [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("POST request to '/register' ")
    }

    return (
        <>
        <img src={BrandLogo} alt="BrandLogo" />
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
            <input type="submit" value="Login" />
        </form>
        </>
    )
}

export default CreateAccount