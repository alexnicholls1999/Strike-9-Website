import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import HomeLayout from "../Layout/HomeLayout";

import Title from "../Components/Atoms/Typography/Title";
import Pattern from "../Components/Atoms/Iconography/Pattern";


import FootballPlayer from "../assets/kisspng-football-player-wallpaper-football-match-5a68fb66da5359.0732821715168295428943.png";
import Topic from "../Components/Organisms/Typography/Topic";
import Index from "../Components/Organisms/Index";
import Testimonial from "../Components/Organisms/Testimonial";


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

const ListWrapper = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    width: 100%;

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        flex-flow: row;
        height: 47.5vh;
    }

    @media(min-width: ${({theme}) => theme.viewport.xl}) {
        height: 75vh;
    }
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    img {
        width: 100%;
    }

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        img {
            height: 350px;
        }
    }

    @media(min-width: ${({theme}) => theme.viewport.lg}) {
        img {
            height: 450px;
            width: 70%;
        }
    }
`;

const List = styled.div`
    height: 100%;
    width: 100%;
`;

const Point = styled.div`
    display: flex;
    flex-flow: column;
    height: 50%;
    width: 100%;
    padding-bottom: ${({growth}) => growth ? "25%" : "15%"};
    align-items: self-end;

    &::before {
        content: '';
        position: absolute;
        display: ${({growth}) => growth ? "flex" : "none"};
        background-color: #F5F4F9;
        z-index: -1;
        left: 0;
        height: 50%;
        width: 100%; 
    }
`;

const PointContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: self-start;
    padding-top: 20px;
    height: 100%;
    width: 90%;
    margin: 0 auto;

    p {
        line-height: 1.75rem;
        width: 75%;
    }

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        align-items: ${({growth}) => growth ? "self-end" : "self-start"};
        text-align: ${({growth}) => growth ? "right" : "left"};
    }

`

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

const quotes = [
    {
      name: "Jade White",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 5
    },
    {
      name: "Andy Stanford",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 1
    },
    {
      name: "Jessica Jadie",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 3
    },
    {
      name: "Ollie Burns",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 4
    },
    {
      name: "Mason Tanner",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 2
    }
];

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
                    <Col md={12}>
                        <Title float={{ right: true }} title="TRAINING PLANS" />
                    </Col>
                </Row>
            </Container>
            <ListWrapper>
                <ImageWrapper>
                    <img src={FootballPlayer} alt="Football-Player" />
                </ImageWrapper>
                <List>
                    <Point>
                        <PointContainer>
                            <h3>COLLABORATION</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quasi. Doloremque fugiat repellat libero exercitationem eos amet cum officia itaque.</p> 
                        </PointContainer>
                    </Point>
                    <Point growth>
                        <PointContainer growth>
                            <h3>GROWTH</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quasi. Doloremque fugiat repellat libero exercitationem eos amet cum officia itaque.</p> 
                        </PointContainer>
                    </Point>
                </List>
            </ListWrapper>
            
            <Promises>
                <Container fluid>
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
            {/* 

            <Testimonial quotes={quotes} />
            <div className="p-3"></div>
            <Topic />  
            <Index /> */}
        </HomeLayout>
    )
}
