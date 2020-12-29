import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Collapse = styled(Navbar.Collapse)`

`;

const StyledNav = styled(Nav)`
    padding-top: 10px !important;
    padding-bottom: 10% !important;

    @media (min-width: 992px) {
        padding: 0 !important;
    }

`;

const NavLink = styled(Nav.Link)`
    color: rgba(255,255,255,.5);
    padding: .5rem;
    padding-left: 0;
    border-bottom: 3px solid white;

    @media (min-width: 992px) {
        border-bottom: none;
        padding: 0px .5rem;
    }

`;

const NavItem = styled(Nav.Item)`


`;


function BootstrapNav(props) {

    const { location } = props;

    return (
        <Collapse id="basic-navbar-nav">
            <StyledNav className="ml-auto" activeKey="/events">
                <Nav.Item>
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/">About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/">Training</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="/events" as={Link} to="/events">Events</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/">Corporate</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/">Contact Us</Nav.Link>
                </Nav.Item>
            </StyledNav>
        </Collapse>
         
    )
}

export default BootstrapNav;