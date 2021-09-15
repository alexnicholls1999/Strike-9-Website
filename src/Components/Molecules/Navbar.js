import { useState } from "react";
import { Navbar as BootstrapNavbar, Container, Nav} from "react-bootstrap";
import Hamburger from "../Atoms/Iconography/Hamburger";
import Logo from "../Atoms/Iconography/Logo";
import SideBar from "./SideBar";




function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <BootstrapNavbar bg="none" expand="lg" variant="dark">
            <Container fluid>
                <Logo />
                <Hamburger open={open} onClick={() => setOpen(!open)} />
                <SideBar open={open} />
                <BootstrapNavbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>About Us</Nav.Link>
                        <Nav.Link>Training</Nav.Link>
                        <Nav.Link>Events</Nav.Link>
                        <Nav.Link>Coaching</Nav.Link>
                        <Nav.Link>Contact</Nav.Link> 
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    )
}

export default Navbar;
