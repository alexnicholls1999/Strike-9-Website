import React from 'react';
import styled from "styled-components";
import { Container, Navbar, Nav, NavDropdown, Row, NavbarBrand} from "react-bootstrap";

import Hamburger from '../Atoms/Hamburger';
import BoostrapNav from '../Molecules/Nav';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const Collapse = styled(Navbar.Collapse)`


`;

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;

`;

function Header() {
    return (
        <Navbar bg="light" variant="light">
            {/* <Container>
                <h2>Logo</h2>
                <Hamburger />
                <BoostrapNav />
            </Container> */}
            <NavbarBrand><h2>Logo</h2></NavbarBrand>

            <NavbarCollapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Nav.Link href="#link">Link 2</Nav.Link>
                    <Nav.Link href="#link">Link 3</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </NavbarCollapse>
        </Navbar>
    )
}

export default Header;
