import styled from "styled-components";
import Logo from "../../Atoms/Iconography/Logo";

const StyledLogoFooter = styled.div`
    text-align: center;
    padding: 0;
    padding-bottom: 10%;
    float: left;
    @media (min-width: 768px) {
        padding: 25%;
        padding-top: 0;        
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