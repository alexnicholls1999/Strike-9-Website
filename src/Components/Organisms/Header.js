import styled from "styled-components";
import Navbar from "./../Molecules/Navbar"

const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const StyledLogo = styled.div`
    width: 100%;
    padding: 2rem 0 0 1rem;
    font-weight: bold;
    z-index: 5;
    color: ${({theme}) => theme.colors.neutral[200]};

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        width: 25%;
        padding: 0 2rem;
    }
`;

function Header({...props}) {
    return (
        <StyledHeader>
            <StyledLogo>
                Strike 9 Training
            </StyledLogo>
            <Navbar {...props}/>
        </StyledHeader>
    )
}

export default Header
