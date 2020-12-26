import React from 'react';
import styled from "styled-components";
import Logo from '../Atoms/Logo';
import { Navbar, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import Hamburger from '../Atoms/Hamburger';
import Nav from './Nav'


function Navigationbar() {
    return (
        <Navbar expand="lg" variant="dark">
            <Logo/>
            <Hamburger />
            <Nav />
        </Navbar>
    )
}

export default Navigationbar;
