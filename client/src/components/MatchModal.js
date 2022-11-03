import Modal from 'react-bootstrap/Modal';
import AppLogo from "../images/two-hearts-48.png"

const MatchModal = ({show, onHide}) => {
    return (
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered="true"
        className="border-0"
        >
        <Modal.Body id="match-modal-body">
            <h3>It's A MATCH! <img src={AppLogo} alt="BrandLogo" /></h3>
        </Modal.Body>
        </Modal>
    )
}

export default MatchModal