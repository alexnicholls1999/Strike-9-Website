import React from 'react'
import styled from "styled-components";
import {Container, Col, Row} from "react-bootstrap";
import SocialMedia from '../Molecules/SocialMedia';
import Button from '../Atoms/Button';
import { useHistory } from 'react-router-dom'

const HeroWrapper = styled.div`

    position: relative;
    top: 0;
    background-color: ${({theme, secondary}) => secondary ? theme.colors.primary.RoyalPurple : "none"};
    width: 100%;
    padding: 1rem;
    height: 90%;

`
const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
`;

const SocialMediaHeroWrapper = styled.div`
    position: absolute;
    bottom: 10%;
    right: 10%;
`;

function Hero(props) {

    const {title, paragraph, children, secondary, homepage} = props;

    
    const history = useHistory();

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
                {!secondary ? (
                    homepage ? (
                        <>
                            <Row>
                                <ButtonsWrapper>
                                    <Button style={{marginRight: "10px"}} onClick={() => history.push('/events')}text="REGISTER"/>
                                    <Button text="FIND OUT MORE"/>
                                </ButtonsWrapper>
                            </Row>
                            <SocialMediaHeroWrapper>
                                <SocialMedia/>
                            </SocialMediaHeroWrapper>
                        </>
                    ) : null
                ) : (
                <Row>
                    {children}
                </Row>
                )}
                
            </Container>
        </HeroWrapper>
    )
}

export default Hero;
