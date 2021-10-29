import styled from 'styled-components';
import { useState } from 'react';
import Hamburger from '../Atoms/Iconography/Hamburger';

const Nav = styled.div`
    width: 90%;
    height: 55px;
    border-bottom: 2px solid #f1f1f1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <Nav>
            <Hamburger open={open} onClick={() => setOpen(!open)}/>
            <Ul open={open}>
                <li>Home</li>
                <li>About Us</li>
                <li>Training</li>
                <li>Events</li>
                <li>Coaching</li>
                <li>Contact</li>
            </Ul>
        </Nav>
    )
}

export default Navbar
