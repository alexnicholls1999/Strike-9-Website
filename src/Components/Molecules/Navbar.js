import { useState } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container, Nav, Navbar as BootstrapNav} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { NavLink } from "react-router-dom";
import Hamburger from "./../Atoms/Iconography/Hamburger";

import Logo from "../Atoms/Iconography/Logo";

const StyledNav = styled(Nav)`
    padding-top: 10px !important;
    padding-bottom: 10% !important;
    
    @media (min-width: 768px){
        padding: 0 !important;
    }

`;

const StyledNavbar = styled(BootstrapNav)`
    background: ${({ open, navBg, menuColor}) => (open ? menuColor : navBg)};
    padding-bottom: 5%;
`;

const StyledNavLink = styled(NavLink)`
    border-bottom: 3px solid ${({theme}) => theme.colors.neutral.SilverGrey};

    &.active{
        border-bottom: 3px solid ${({theme, secondary}) => (secondary ? theme.colors.primary.RoyalPurple : theme.colors.secondary.White)};
    }

    @media (min-width: ${({theme}) => theme.viewport.mediumDevices}){
        border-bottom: none;
    }

`;


function Navbar({menuColor, navBg, dark, variant}) {

    const [open, setOpen] = useState(false);

    return (
        <StyledNavbar open={open} menuColor={menuColor} navBg={navBg} variant={variant} expand="lg">
            <Container>
                <Logo dark={dark}/>
                <Hamburger dark={dark} open={open} onClick={() => setOpen(!open)}/>
                <NavbarCollapse id="basic-navbar-nav" open={open}>
                    <StyledNav className="ms-auto">
                        <Nav.Item>
                            <Nav.Link as={StyledNavLink} exact to="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={StyledNavLink} secondary exact to="/aboutus">About Us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={StyledNavLink} exact to="/training">Training</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={StyledNavLink} to="/events">Events</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={StyledNavLink} exact to="/coaching">Coaching</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={StyledNavLink} exact to="/contact">Contact</Nav.Link>
                        </Nav.Item>
                    </StyledNav>
                </NavbarCollapse>
            </Container>
        </StyledNavbar>
    )
}

Navbar.propTypes = {
    menuColor: PropTypes.string,
    navBg: PropTypes.string
}

export default Navbar
