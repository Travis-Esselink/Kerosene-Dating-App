import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BrandLogo from "../images/two-hearts-48.png"
import { useNavigate } from 'react-router-dom'
import ThemeProvider from 'react-bootstrap/ThemeProvider'


const Unmatch = ({show, handleClose, match}) => {
    const navigate = useNavigate()
    const unmatchClick = async () => {
        const resp = await fetch(`/v1/profiles/unmatch/${match._id}` , {
            method:'PUT'
        })
        const res = await resp.json()
        console.log(res,'res')
        navigate('/home/matches')
    }
    //need to update user state
    return (
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
    >
        <Modal.Header closeButton>
        <Modal.Title>
            <img src={BrandLogo}/>
            Unmatch
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Confirm you wish to unmatch with {match.displayName}. This can not be un-done.</p>
        </Modal.Body>
        <Modal.Footer>
        <ThemeProvider prefixes={{ btn: 'unmatch-button' }}>
            <Button variant="danger" onClick={unmatchClick}>Unmatch</Button>
        </ThemeProvider>
        </Modal.Footer>
    </Modal>
    )
}

export default Unmatch