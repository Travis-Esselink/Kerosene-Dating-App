import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import SmallLogo from "../images/mainLogoSmall.png";
import LogoutButton from './LogoutButton';


const NavConsistent = () => {
    return (
        <Navbar collapseOnSelect variant='light' expand='md'>
            <Navbar.Brand as={Link} to='/home' className="nav-consistent-brand">
                <img src={SmallLogo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' className="nav-consistent-toggler" />
            <Navbar.Collapse id='basic-navbar-nav' className="nav-consistent-collapse">
            <Nav className="mr-auto"></Nav>
                <Nav>
                    <Nav.Link as={Link} to='/home/main'>
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to='/profile'>
                        Profile
                    </Nav.Link>
                   
                            <Nav.Link as={Link} to='/' className="nav-consistent-logout">
                                <LogoutButton />
                            </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavConsistent