import React from 'react'
import styled from "styled-components";
import {Container, Col, Row} from "react-bootstrap";
import Wallpaper from '../Atoms/Wallpaper';

const HeroWrapper = styled.div`

    position: relative;
    top: 0;
    background-color: ${({theme, secondary}) => secondary ? theme.colors.primary.RoyalPurple : "none"};
    width: 100%;
    padding: 1rem;
<<<<<<< HEAD
    height: 50vh
=======
    height: 90vh;
>>>>>>> 3b0bcafff5df06b9dfbfbe01f164ea7a678f9b14

`


function Hero(props) {

    const {title, paragraph, children, secondary} = props;

    return (
        <HeroWrapper secondary={secondary}>
            <Container>
                <Row style={{paddingTop: "3rem"}}>
                    <Col lg={8} md={8} sm>
                        <h1>{title}</h1>
                        <p>{paragraph}</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    {children}
                </Row>
            </Container>
        </HeroWrapper>
    )
}

export default Hero;
