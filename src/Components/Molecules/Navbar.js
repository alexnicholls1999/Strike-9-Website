import React, {useState} from 'react';
import styled from "styled-components";
import { Container, Nav, Navbar } from "react-bootstrap";
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

const StyledNavbar = styled(Navbar)`
    background: ${({ open, navBg, menuColor}) => (open ? menuColor : navBg)};
    padding-bottom: 5%;
`

const StyledNavLink = styled(NavLink)`
    border-bottom: 3px solid ${({theme}) => theme.colors.neutral.SilverGrey};

    &.active{
        border-bottom: 3px solid ${({theme}) => theme.colors.neutral.White};
    }

    @media (min-width: ${({theme}) => theme.viewport.mediumDevices}){
        border-bottom: none;
    }


`;


function BootstrapNavbar(props) {

    const { navBg, menuColor } = props;
    const [open, setOpen] = useState(false);

    return (
        <StyledNavbar
            open={open}
            navBg={navBg}
            menuColor={menuColor}
            variant="dark"
            expand="lg"
        >
            <Container>
                <Logo />
                <Hamburger open={open} onClick={() => setOpen(!open)}/>
                <NavbarCollapse id="basic-navbar-nav" open={open}>
                    <StyledNav className="ml-auto">
                        <Nav.Item>
                            <Nav.Link as={StyledNavLink} exact to="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={StyledNavLink} to="/events">Events</Nav.Link>
                        </Nav.Item>
                    </StyledNav>
                </NavbarCollapse>
            </Container>
        </StyledNavbar>
    )
}

export default BootstrapNavbar;
