import React from 'react';
import styled from "styled-components";
import { Col, Container, Row } from 'react-bootstrap';
import Button from '../Components/Atoms/Button';
import FootballPlayer from '../assets/kisspng-football-player-wallpaper-football-match-5a68fb66da5359.0732821715168295428943.png';
import Testimonial from '../Components/Organisms/Testimonial';
import AboutInfoImage from '../assets/about-info-image.png';
import GreyBorder from '../Components/Atoms/GreyBorder';
import Index from '../Components/Organisms/Index';


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
    // background-color: ${({growth}) => (growth ? "#F5F4F9" : "none")};

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
        color: black;
        box-shadow: 0 32px 0px 0 #5E3DB3;
    }
`;

const TestimonialWrapper = styled.div`
    padding: 10px 0;

    h2 {
        padding-top: 10%;
    }

`;

const Promises = styled.div`
    background: ${({theme}) => theme.colors.primary.RoyalPurple};
    text-align: center;
    color: ${({theme}) => theme.colors.neutral.White};
    padding-top: 10% !important;
    padding-bottom: 10% !important;
    padding: 10%;

    h4 {
        font-weight: ${({theme}) => theme.typography.fontWeight.semiBold}
    }

`

const About = styled.div`

    button {
        width: 150px;
    }

    img {
        width: 100%;
    }

    h2 {
        padding-top: 10%;
    }
`;

const AboutInfo = styled.div`
    p {
        color: ${({theme}) => theme.colors.neutral.Black};
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
            <GreyBorder />
            <Promises>
                <Container>
                    <Row>
                        <Col sm={3}>
                            <h4>COACHING</h4>
                            <p>We will work with coaches to develop their knowledge</p>
                        </Col>
                        
                        <Col sm={3}>
                            <h4>PLAYERS</h4>
                            <p>We will work with coaches to develop their knowledge</p>
                        </Col>
                        
                        <Col sm={3}>
                            <h4>PARENTS</h4>
                            <p>We will work with coaches to develop their knowledge</p>
                        </Col>
                        
                        <Col sm={3}>
                            <h4>VOLUNTEERS</h4>
                            <p>We will work with coaches to develop their knowledge</p>
                        </Col>
                    </Row>
                </Container>
            </Promises>


            <TestimonialWrapper>
                <Container>
                    <Row>
                        <Col md={6} sm>
                            <h2>FEEDBACK</h2>
                        </Col>
                    </Row>
                
                    <Testimonial />
                </Container>
            </TestimonialWrapper>
            <GreyBorder />
            <About>
                <Container>
                    <Row>
                        <Col md={6} sm className="mr-auto">
                            <h2>ABOUT US</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} sm>
                            <AboutInfo>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit similique tenetur eos dicta ducimus obcaecati cum saepe natus incidunt, fuga porro nesciunt consectetur animi quidem asperiores voluptatem temporibus culpa veritatis?</p>
                                <Button text="FIND OUT MORE"/>
                            </AboutInfo>
                        </Col>
                        <Col md={6} sm>
                            <img src={AboutInfoImage} alt="Football-Player"/>
                        </Col>
                    </Row>
                </Container>
            </About>
            <GreyBorder />
            <Index />
        </>
    )
}

export default Home
