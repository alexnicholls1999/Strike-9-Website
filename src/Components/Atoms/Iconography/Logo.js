import styled from "styled-components"
import Strike9Logo from "./../../../assets/Strike-9-Logo.png";
import Strike9LogoMobile from "./../../../assets/Strike-9-Logo1.png";

const StyledLogo = styled.img`
    height: 2.5rem;
    display: none;

    @media(min-width: ${({theme}) => theme.viewport.lg}) {
        display: block;
    }
`;

const StyledLogoMobile = styled.img`
    height: 2rem;
    z-index: 2;
    display: block; 

    @media(min-width: ${({theme}) => theme.viewport.lg}) {
        display: none;
    }
`;

function Logo() {
    return (
        <>
            <StyledLogoMobile src={Strike9LogoMobile}/>
            <StyledLogo src={Strike9Logo}/>
        </>
    )
}

export default Logo;

