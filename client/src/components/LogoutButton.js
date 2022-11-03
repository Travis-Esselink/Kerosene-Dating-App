import { useNavigate } from 'react-router-dom';

const LogoutButton = ({setUser}) => {

    const navigate = useNavigate()
    const handleClick = async () => {
        const res = await fetch("/logout", {
            method: "POST"
        })
        const data = await res.json()
        console.log(data);
        setUser(null)
        navigate("/")
    }

    return (
        <button onClick={handleClick}>Logout</button>
    )
}

export default LogoutButton