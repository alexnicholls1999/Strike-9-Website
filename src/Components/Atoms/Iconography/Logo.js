import styled from "styled-components"
import Strike9Logo from "./../../../assets/Strike-9-Logo.png";
import Strike9LogoMobile from "./../../../assets/Strike-9-Logo1.png";

const Logo = styled.div`
    height: 2.5rem; 
    width: 50px;
    background-image: url(${Strike9LogoMobile});
    background-size: cover;
    z-index: 2;

    @media(min-width: ${({theme}) => theme.viewport.lg}) {
        width: 12rem;
        height: 3.5rem;
        background-image: url(${Strike9Logo});
    }
`;

export default Logo;


