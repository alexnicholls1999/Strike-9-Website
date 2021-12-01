import { Container } from "react-bootstrap";
import styled from "styled-components";
import Logo from "../Atoms/Iconography/Logo";
import Navbar from "./../Molecules/Navbar"

const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;


function Header({isAuthenticated, signOut, ...props}) {
    return (
        <Container>
            <StyledHeader>
                <Logo />
                <Navbar isAuthenticated={isAuthenticated} signOut={signOut} {...props}/>
            </StyledHeader>
        </Container>

    )
}

export default Header
