import React from 'react'
import styled from 'styled-components'
import {Container, Col, Row} from 'react-bootstrap'

const HeroWrapper = styled.div`
    position: relative;
    top: 0;
    background-color: ${({ theme }) => theme.colors.primary.RoyalPurple};
    width: 100%;
    padding: 1rem;
`;

function Hero(props) {

    return (
        <>
            <HeroWrapper>
                <Container>
                    <Row style={{paddingTop: "3rem"}}>
                        <Container>
                            <Col lg={8} md={8} sm> 
                                <h1>{props.title}</h1>
                            </Col>
                        </Container>
                    </Row>
                </Container>
                <Container >
                    <Row>
                        {props.children}
                    </Row>
                </Container>
            </HeroWrapper>
        </>
    )
}

export default Hero;
