import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import HomeLayout from "../Layout/HomeLayout";

import Title from "../Components/Atoms/Typography/Title";
import Pattern from "../Components/Atoms/Iconography/Pattern";


import FootballPlayer from "../assets/kisspng-football-player-wallpaper-football-match-5a68fb66da5359.0732821715168295428943.png";
import Topic from "../Components/Organisms/Typography/Topic";


const StyledSportsEnglandWrapper = styled.div`
    background-color: ${({theme}) => theme.colors.secondary.Violet};
    padding: 10%;

    img {
        width: 100%;
    }

    @media (min-width: ${({theme}) => theme.viewport.lg}) {
        padding: 2.5%;
    }
`;

const ImageWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;

    img {
        width: 100%;
        margin: 0 auto;
    }

    @media(min-width: ${({theme}) => theme.viewport.lg}) {
        img {
            position: absolute;
        }
    }
`;

const List = styled.div`
    padding: 5% 0 10%;
    display: flex;
    flex-flow: column;
    align-items: ${({growth}) => (growth ? "self-end" : "self-start")};

    p {
        padding-top: 10px;
        color: ${({theme}) => theme.colors.neutral.Black};
        text-align: ${({growth}) => (growth ? "right" : "left")};
        line-height: 36px;
        width: 100%;
    }

    &::before {
        content: '';
        display: ${({growth}) => growth ? "block" : "none"};
        padding: 40%;
        position: absolute;
        background: #F5F4F9;
        z-index: -1;
        width: 100vw;
        left: 0;
    }

    @media(min-width: ${({theme}) => theme.viewport.lg}) {
        padding: 0 5% 27.5%;
        
        p {
            line-height: 50px;
            width: 100%;
        }

        &::before {
            padding: 15%;
        }
    }
`;

const Point = styled.div`
    padding: 10% 0 0;
    display: flex;
    flex-direction: ${({growth}) => (growth ? "row-reverse" : "row")};
    
    h3 {
        padding-left: 10px;
        padding-right: ${({growth}) => (growth && "10px")};
        color: ${({theme}) => theme.colors.neutral.Black};
    }
`;

const Promises = styled.div`
    background: ${({theme}) => theme.colors.primary.RoyalPurple};
    text-align: center;
    color: ${({theme}) => theme.colors.neutral.White};
    padding: 5% 0;
    display: flex;
    flex-flow: column;

    h4 {
        font-weight: ${({theme}) => theme.typography.fontWeight.semiBold};
    }

    @media(min-width: ${({theme}) => theme.viewport.lg}) {
        flex-flow: row;
    }
`;

const goals = [
    {
        title: "COACHING",
        message: "We will work with coaches to develop their knowledge"
    },
    {
        title: "PLAYERS",
        message: "We will work with coaches to develop their knowledge"
    },
    {
        title: "PARENTS",
        message: "We will work with coaches to develop their knowledge"
    },
    {
        title: "VOLUNTEERS",
        message: "We will work with coaches to develop their knowledge"
    },
]

export default function Home() {
    return (
        <HomeLayout>
            <StyledSportsEnglandWrapper>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={3}>
                            <img src="https://www.sportengland.org/themes/custom/se/images/se-logo-white.png" alt="sportengland" />
                        </Col>
                    </Row>
                </Container>
            </StyledSportsEnglandWrapper>
            <Pattern />
            <Container fluid>
                <Row>
                    <Title float={{ right: true }} title="TRAINING PLANS" />
                </Row>
                <div className="p-3"></div>
                <Row>
                    <Col md={6} sm>
                        <ImageWrapper>
                            <img src={FootballPlayer} alt="football_player"/>
                        </ImageWrapper>
                    </Col>
                    <Col md={6} sm>
                        <List>
                            <Point>
                                <h3>COLLABORATION</h3>
                            </Point>
                            <p>We work year-round, with teams and individual players, to raise the level of every player we work with. </p>
                        </List>
                        <div className="p-5"></div>
                        <List growth> 
                            <Point growth>
                                <h3>GROWTH</h3>
                            </Point>
                            <p>We work year round with teams and individual players, to raise the level of every player we work with.</p>
                        </List>
                    </Col>
                </Row>        
            </Container>
            <Promises>
                <Container>
                    <Row>
                        {goals.map(({title, message}) => {
                            return (
                                <Col md={3} sm={6} className="p-4">
                                        <h4>{title}</h4>
                                        <p>{message}</p>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </Promises>
            {/* <Container fluid>
                <div className="p-4"></div>
                <Row>
                    <Title float={{ left: true }} title="FEEDBACK" />
                </Row>
            </Container> */}
            <div className="p-3"></div>
            <Container>
                <Topic float={{right: true, left: false}} src="https://www.strike9-training.com/S9/wp-content/uploads/2021/04/S9-wc_1-300x300.jpg" alt="About-Us" />
            </Container>

        </HomeLayout>
    )
}
