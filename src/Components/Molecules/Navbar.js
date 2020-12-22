import React from 'react'
import PropTypes from 'prop-types';
import styled from "styled-components";
import Logo from '../Atoms/Logo';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import { useLocation, Link } from "react-router-dom"

function Navigationbar() {
    return (
        <Navbar expand="lg" variant="dark">
            <Logo/>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About Us</Nav.Link>
                <Nav.Link href="#link">Training</Nav.Link>
                <Nav.Link href="#link">Events</Nav.Link>
                <Nav.Link href="#link">Corporate</Nav.Link>
                <Nav.Link href="#link">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigationbar;
