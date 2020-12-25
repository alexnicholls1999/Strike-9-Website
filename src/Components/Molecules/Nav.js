import React from 'react'
import {Nav} from 'react-bootstrap';

function BootstrapNav() {
    return (
        <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Training</Nav.Link>
            <Nav.Link href="#link">Events</Nav.Link>
            <Nav.Link href="#link">Corporate</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
        </Nav> 
    )
}

export default BootstrapNav;