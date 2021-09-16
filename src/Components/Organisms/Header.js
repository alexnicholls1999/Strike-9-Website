import styled from "styled-components";
import Navbar from "./../Molecules/Navbar";

const StyledHeader = styled.div`
    padding: 10px;

    @media(min-width: ${({theme}) => theme.viewport.lg}) {
        padding: 20px 40px;
    }

`;

function Header() {
    return (
        <StyledHeader>
            <Navbar />
        </StyledHeader>
    )
}

export default Header
