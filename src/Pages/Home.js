import * as Styled from "./../styles/PageStyles/HomeStyles";
import { Container, Row, Col } from 'react-bootstrap';
import FadeIn from "../Animations/FadeIn";
import GreyBorder from "../Components/Atoms/GreyBorder";
import Button from "./../Components/Atoms/Buttons/Button";

import FootballPlayer from '../assets/kisspng-football-player-wallpaper-football-match-5a68fb66da5359.0732821715168295428943.png';
import AboutInfoImage from '../assets/about-info-image.png';
import Index from "../Components/Organisms/Index";


function Home() {
    return (
        <div>
            <FadeIn>
                <Styled.Sponsors>
                    <Container>
                        <Row className="justify-content-center">
                            <Col md={3}>
                                <img src="https://www.sportengland.org/themes/custom/se/images/se-logo-white.png" alt="sportengland" />
                            </Col>
                        </Row>
                    </Container>
                </Styled.Sponsors>
            </FadeIn>

            <FadeIn>
                <Styled.TrainingPlans>
                    <Container>
                        <Row>
                            <Col md={6} sm>
                                <h2>TRAINING PLANS</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} sm>
                                <Styled.ImageWrapper>
                                    <img src={FootballPlayer} alt="football_player"/>
                                </Styled.ImageWrapper>
                            </Col>
                            <Col md={6} sm>
                                <Styled.List>
                                    <Styled.Point>
                                        <h5>01</h5>
                                        <h3>COLABORATION</h3>
                                    </Styled.Point>
                                    <p>We work year round with teams and individual players, to raise the level of every player we work with.</p>
                                </Styled.List>
                            </Col>
                        </Row>
                    </Container>
                </Styled.TrainingPlans>
                <Styled.GrowthWrapper>
                    <Container>
                            <Row>
                                <Col md={6} sm className="ms-auto">
                                    <Styled.List growth>
                                        <Styled.Point growth>
                                            <h5>02</h5>
                                            <h3>GROWTH</h3>
                                        </Styled.Point>
                                        <p>We work year round with teams and individual players, to raise the level of every player we work with.</p>
                                    </Styled.List>
                                </Col>
                            </Row>
                    </Container>
                </Styled.GrowthWrapper>
            </FadeIn>

            <FadeIn>
                <Styled.Promises>
                    <Container>
                        <Row>
                            <Col md={3} sm={6}>
                                <h4>COACHING</h4>
                                <p>We will work with coaches to develop their knowledge</p>
                            </Col>
                            
                            <Col md={3} sm={6}>
                                <h4>PLAYERS</h4>
                                <p>We will work with coaches to develop their knowledge</p>
                            </Col>
                            
                            <Col md={3} sm={6}>
                                <h4>PARENTS</h4>
                                <p>We will work with coaches to develop their knowledge</p>
                            </Col>
                            
                            <Col md={3} sm={6}>
                                <h4>VOLUNTEERS</h4>
                                <p>We will work with coaches to develop their knowledge</p>
                            </Col>
                        </Row>
                    </Container>
                </Styled.Promises>
            </FadeIn>

            <FadeIn>
                <Styled.About>
                    <Container>
                        <Row>
                            <Col md={6} sm className="mr-auto">
                                <h2>ABOUT US</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} sm={12}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit similique tenetur eos dicta ducimus obcaecati cum saepe natus incidunt, fuga porro nesciunt consectetur animi quidem asperiores voluptatem temporibus culpa veritatis?</p>
                                <Button text="FIND OUT MORE"/>
                            </Col>
                            <Col md={6}>
                                <img src={AboutInfoImage} alt="Football-Player"/>
                            </Col>
                        </Row>
                    </Container>
                </Styled.About>
                <GreyBorder />
            </FadeIn>

            <Index />

        </div>
    )
}

export default Home
