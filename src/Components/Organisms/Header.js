import styled from "styled-components";
import Navbar from "./../Molecules/Navbar"

const StyledHeader = styled.header`
    display: flex;
    flex-flow: row;
    width: 100%;
    
`;

function Header() {
    return (
        <StyledHeader>
            <h1>Strike 9 Training</h1>
            <Navbar />
        </StyledHeader>
    )
}

export default Header
