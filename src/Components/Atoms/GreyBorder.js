import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import styled from "styled-components";

const StyledGreyBorder = styled.div`

    background-color: #F5F4F9;
    padding: 25%;
    z-index: -1;
    margin-top: -10%;

    @media (min-width: ${({theme}) => theme.viewport.mediumDevices}){
        padding: 10%;
    }

`;

function GreyBorder({style}) {
    return (
        <StyledGreyBorder style={style}>
            <Container>
                <Row>

                </Row>
            </Container>
        </StyledGreyBorder>

    )
}

export default GreyBorder
