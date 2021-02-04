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

`


function Hero(props) {

    const {title, paragraph, children, secondary} = props;

    return (
        <HeroWrapper secondary={secondary}>
            <Wallpaper/>
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
