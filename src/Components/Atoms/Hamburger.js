import React, {useState} from 'react';
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import styled from "styled-components";

const StyledHamburger = styled(NavbarToggle)`
    position: relative;
    height: 2rem;
    top: 5px;
    z-index: 2;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    border: none;
    

    outline: none !important;

    div {
        width: 1.5rem;
        height: 3px;
        
        transform-origin: 1px;
        transition: all .3s ease-in;

        &:nth-child(1){
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate{0}")};  
        }

        &:nth-child(2) {
            opacity: ${({ open }) => (open ? 0 : 1)}
        }

        &:nth-child(3) {
            transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate{0}")};
        }
    }

`

function Hamburger() {

    const [open, setOpen] = useState(false)

    return (
        <StyledHamburger
            aria-controls="basic-navbar-nav"
            open={open}
            onClick={() => setOpen(!open)}
        >
            <div></div>
            <div></div>
            <div></div>
            
        </StyledHamburger>
    )
}

export default Hamburger
