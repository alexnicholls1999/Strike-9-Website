import React from 'react'
import PropTypes from 'prop-types';
import styled from "styled-components";
import Logo from '../Atoms/Logo';
import { Navbar, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import { useLocation, Link } from "react-router-dom"
import Hamburger from '../Atoms/Hamburger';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Nav from './Nav'


function Navigationbar() {
    return (
        <Navbar expand="lg" variant="dark">
            <Logo/>
            <Hamburger ariaControls="basic-navbar-nav"/>
            <Nav />
        </Navbar>
    )
}

export default Navigationbar;
