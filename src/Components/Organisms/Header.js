import React from 'react';
import styled from 'styled-components';
import Navigationbar from '../Molecules/Navbar';
import {Container, Row, Col} from "react-bootstrap";

const HeaderWrapper = styled.header`
    display: flex;
    position: relative;
    background-color: ${({ theme, secondary }) => secondary ? theme.colors.primary.DaisyBush : 'transparent'};
`;

function Header(props) {
    return (
        <HeaderWrapper secondary={props.secondary} >
            <Container>
                <Navigationbar/>
            </Container>
        </HeaderWrapper>
    )
}

export default Header;