import React from 'react';
import styled from "styled-components";
import { Nav, Navbar } from "react-bootstrap";
import Hamburger from '../Atoms/Hamburger';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { NavLink } from "react-router-dom";
import Logo from '../Atoms/Logo';

const StyledNav = styled(Nav)`  
    padding-top: 10px !important;
    padding-bottom: 10% !important;

    @media (min-width: ${({theme}) => theme.viewport.mediumDevices}){
        padding: 0 !important;
    }

`;

const StyledNavLink = styled(NavLink)`

    &.active {
        border-bottom: 3px solid ${({theme}) => theme.colors.neutral.White};
    }
`;


function BootstrapNavbar() {
    return (
        <Navbar variant="dark" expand="lg">
            <Logo />
            <Hamburger />
            <NavbarCollapse id="basic-navbar-nav">
                <StyledNav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link as={StyledNavLink} exact to="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={StyledNavLink} to="/events">Events</Nav.Link>
                    </Nav.Item>
                </StyledNav>
            </NavbarCollapse>
        </Navbar>
    )
}

export default BootstrapNavbar;
