import React from 'react';
import Logo from "../../Atoms/Logo";
import styled from "styled-components";

const StyledLogoFooter = styled.div`
    text-align: center;
    padding: 0;
    padding-bottom: 10%;
    float: left;

    @media (min-width: ${({theme}) => theme.viewport.mediumDevices}) {
        padding: 25% !important;
        padding-top: 0 !important;
        
    }

`;


function LogoFooter() {
    return (
        <StyledLogoFooter>
            <Logo />
        </StyledLogoFooter>
    )
}

export default LogoFooter;
