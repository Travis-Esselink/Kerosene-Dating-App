import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

const LogoutButton = ({setUser}) => {

    const navigate = useNavigate()
    const handleClick = async () => {
        const res = await fetch("/logout", {
            method: "POST"
        })
        const data = await res.json()
        setUser(null)
        navigate("/")
    }

    return (
        <>
        <ThemeProvider prefixes={{ btn: 'login-button' }}>
            <Button onClick={handleClick}>Logout</Button>
        </ThemeProvider>
        </>
    )
}

export default LogoutButton