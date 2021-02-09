import React from 'react';
import styled from "styled-components";
import { Col, Container, Row } from 'react-bootstrap';
import HeroContent from '../Components/Molecules/HeroContent';
import Hero from '../Components/Organisms/Hero';
import Wallpaper from '../Components/Atoms/Wallpaper';
import FootballPlayer from '../assets/kisspng-football-player-wallpaper-football-match-5a68fb66da5359.0732821715168295428943.png';

const homeImages = [
    {
        name: "SportEngland",
        src: "https://www.sportengland.org/themes/custom/se/images/se-logo-white.png",
        alt: "Sport England"
    }
] 




const Sponsors = styled.div`
    background-color: ${({theme}) => theme.colors.secondary.Violet};
    padding: 10%;

    @media (min-width: ${({theme}) => theme.viewport.mediumDevices}) {
        padding: 2.5% !important;
    }
`;

const SponsorTitle = styled.h2`
    color: ${({theme}) => theme.colors.neutral.SilverGrey};
`;

const SponsorsImage = styled.img`
    height: 5rem;
`;

const TrainingPlans = styled.div`
    padding-top: 25px;

    h2 {
        color: ${({theme}) => theme.colors.neutral.SilverGrey};
    }

    img {
        width: 100%;
    }
`;

const ListWrapper = styled.div`
    position: relative;

`;

const List = styled.div`
    padding-top: 5%;
    margin: 0 auto;
    padding: 5%;
    background-color: ${({growth}) => (growth ? "#F5F4F9" : "none")};

    p {
        padding-top: 10px;
        color: ${({theme}) => theme.colors.neutral.Black};
        text-align: ${({growth}) => (growth ? "right" : "left")};
    }
`;

const Point = styled.div`
    padding: 0;
    display: flex;
    flex-direction: ${({growth}) => (growth ? "row-reverse" : "row")};

    h3 {
        padding-left: 10px;
        padding-right: ${({growth}) => (growth ? "10px" : "0")};
        color: ${({theme}) => theme.colors.neutral.SilverGrey};
    }

    h5 {
        padding-right: 10px;
        padding: 2px;
        height: 2px;
        border-radius: 10px;
        box-shadow: 0 32px 0px 0 #5E3DB3;
    }
`;
 
function Home() {
  
    return (
        <>
            <Sponsors>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={6} sm>
                            <SponsorTitle>SPONSORS</SponsorTitle> 
                        </Col>
                        <Col md={6} sm>
                            <SponsorsImage src="https://www.sportengland.org/themes/custom/se/images/se-logo-white.png" alt={homeImages.alt} />
                        </Col>
                    </Row>
                </Container>
            </Sponsors> 

            <TrainingPlans>
                <Container>
                    <Row>
                        <Col className="ml-auto" md={6} sm>
                            <h2>TRAINING PLANS</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} sm>
                            <img src={FootballPlayer} alt="football_player"/>
                        </Col>
                        <Col md={6} sm>
                            <ListWrapper>
                                <List>
                                    <Point>
                                        <h5>01</h5>
                                        <h3>COLABORATION</h3>
                                    </Point>
                                    <p>We work year round with teams and individual players, to raise the level of every player we work with.</p>
                                </List>
                                <List growth>
                                    <Point growth>
                                        <h5>02</h5>
                                        <h3>GROWTH</h3>
                                    </Point>
                                    <p>We work year round with teams and individual players, to raise the level of every player we work with.</p>
                                </List>
                            </ListWrapper>
                        </Col>
                    </Row>
                </Container>
            </TrainingPlans>
        </>
    )
}

export default Home
