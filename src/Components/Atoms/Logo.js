import React from 'react'
import { Link } from 'react-router-dom'
import Strike9Logo from "../../assets/Strike-9-Light-Logo.png"
import styled from "styled-components";

const StyledLogo = styled.img`
    height: 2.5rem;
`;


function Logo() {
    return (
        <Link to="/">
            <StyledLogo src={Strike9Logo} alt="strike-9-logo"/>
        </Link>
    )
}

export default Logo;
