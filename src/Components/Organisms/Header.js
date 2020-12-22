import React from 'react';
import styled from 'styled-components';
import Navigationbar from '../Molecules/Navbar';
import {Container, Row, Col} from "react-bootstrap";

const HeaderWrapper = styled.header`
    display: flex;
    position: relative;

`;

function Header() {
    return (
        <HeaderWrapper>
            <Container>
                <Navigationbar />
            </Container>
        </HeaderWrapper>
    )
}

export default Header;