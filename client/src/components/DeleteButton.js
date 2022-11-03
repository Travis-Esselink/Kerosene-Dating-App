// UserProfile needs this

import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

const DeleteButton = ({user, setUser}) => {

    const navigate = useNavigate()

    const handleClick = async () => {
        const res = await fetch(`/v1/profiles/${user._id}`, {
            method: "DELETE"
        })
        const data = await res.json()
        console.log(data)
        setUser(null)
        navigate("/")
    
    }
    return (
        <>
        <ThemeProvider prefixes={{ btn: 'delete-button' }}>
            <Button variant="danger" onClick={handleClick}>Delete Profile</Button>
        </ThemeProvider>
        </>
    )
}

export default DeleteButton