import React from 'react'
import styled from 'styled-components'
import {Container, Row} from 'react-bootstrap'

const Wallpaper = styled.div`
    position: absolute;
    top: 0;
    background-color: ${({ theme }) => theme.colors.primary.DaisyBush};
    height: 100vh;
    width: 100%;
    z-index: -1;
`;

function Hero() {
    return (
        <>
            <Wallpaper/>
            <Container>
                <Row>
                    <h1>Test</h1>
                </Row>
            </Container>
        </>
    )
}

export default Hero;
