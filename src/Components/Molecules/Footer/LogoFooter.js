import React from 'react'
import Logo from '../../Atoms/Logo';
import styled from 'styled-components';

const StyledLogoFooter = styled.div`

    text-align: center;
    padding-bottom: 10%;


    @media (min-width: 768px) {
        padding: 50px !important;
    }
`


function LogoFooter() {
    return (
        <StyledLogoFooter>
            <Logo />
        </StyledLogoFooter>
    )
}

export default LogoFooter;
