import { useState } from 'react';
import styled from 'styled-components';
import { Container, Navbar as BootstrapNav, Nav} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse"; 
import { NavLink } from 'react-router-dom';

import Logo from '../Atoms/Iconography/Logo';
import Hamburger from '../Atoms/Iconography/Hamburger';
import SideBar from './SideBar';



const StyledNav = styled(Nav)`
    padding-top: 10px !important;
    padding-bottom: 10% !important;
    
    @media (min-width: 768px){
        padding: 0 !important;
    }
`;

const StyledNavLink = styled(NavLink)`


`;


const StyledNavbar = styled(BootstrapNav)`
    padding-bottom: 5%;
`;

const pages = [
    {
        name: "Home",
        pathName: "/",
        exact: true
    },
    {
        name: "About Us",
        pathName: "/about",
    },
    {
        name: "Events",
        pathName: "/events",
        exact: true
    },
    {
        name: "Contact",
        pathName: "/contact"
    }
]

function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <StyledNavbar open={open} variant="light" expand="lg" >
            <Container>
                <Logo />
                <Hamburger open={open} onClick={() => setOpen(!open)} />
                <NavbarCollapse id="basic-navbar-nav" open={open}>
                    <StyledNav className="ms-auto">
                        {pages.map((page, i) => {
                            const { exact, pathName, name} = page;
                            return (
                                <Nav.Item key={i}>
                                    <Nav.Link as={StyledNavLink} exact={exact} to={pathName}>{name}</Nav.Link>
                                </Nav.Item>
                            )
                        })}
                    </StyledNav>
                </NavbarCollapse>
                <SideBar open={open} pages={pages} />
            </Container>
        </StyledNavbar>
    )
}

export default Navbar;
