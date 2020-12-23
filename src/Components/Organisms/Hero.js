import React from 'react'
import styled from 'styled-components'
import {Container, Row} from 'react-bootstrap'

const HeroWrapper = styled.div`
    position: relative;
    top: 0;
    background-color: ${({ theme }) => theme.colors.primary.RoyalPurple};
    width: 100%;
`;

function Hero(props) {
    return (
        <>
            <HeroWrapper>
                <Container >
                    <Row>
                        <h1>Test</h1>
                    </Row>
                    <Row>
                        {props.children}
                    </Row>
                </Container>
            </HeroWrapper>
        </>
    )
}

export default Hero;