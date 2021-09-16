import { useContext } from "react";
import { useState } from "react";
import { Navbar as BootstrapNavbar, Container, Nav} from "react-bootstrap";
import { RouteContext } from "../../utils/Context/RouteContext";
import Hamburger from "../Atoms/Iconography/Hamburger";
import Logo from "../Atoms/Iconography/Logo";
import SideBar from "./SideBar";

function Navbar() {

    const pages = useContext(RouteContext);

    const [open, setOpen] = useState(false);

    return (
        <BootstrapNavbar bg="none" expand="lg" variant="dark">
            <Container fluid>
                <Logo />
                <Hamburger open={open} onClick={() => setOpen(!open)} />
                <SideBar open={open} />
                <BootstrapNavbar.Collapse>
                    <Nav className="ms-auto">
                        {pages.map((page, i) => {

                            const { routeName } = page;

                            return <Nav.Link>{routeName}</Nav.Link>
                        })} 
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    )
}

export default Navbar;
