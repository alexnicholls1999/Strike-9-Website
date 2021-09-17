import { useState, useContext } from "react";
import styled from "styled-components";
import { Navbar as BootstrapNavbar, Container, Nav} from "react-bootstrap";
import { RouteContext } from "../../utils/Context/RouteContext";
import { NavLink } from "react-router-dom";
import Hamburger from "../Atoms/Iconography/Hamburger";
import Logo from "../Atoms/Iconography/Logo";
import SideBar from "./SideBar";

const StyledNavLink = styled(NavLink)`
    padding: 20px;

    &.active {
        border-bottom: 3px solid ${({theme}) => theme.colors.neutral.white};    
        font-weight: ${({theme}) => theme.typography.fontWeight.bold};
    }

`;


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
                        {pages.map(({routeName, path, exact}, i) => {
                            return (
                                <Nav.Item style={{padding: " 0 .5vw"}}>
                                    <Nav.Link as={StyledNavLink} exact={exact} to={path}>{routeName}</Nav.Link>
                                </Nav.Item>
                            )
                        })} 
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    )
}

export default Navbar;
