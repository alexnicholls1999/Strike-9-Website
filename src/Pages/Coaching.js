import * as Styled from "./../styles/PageStyles/CoachingStyles";
import { Col, Row, Container } from "react-bootstrap";
import Hero from "../Components/Organisms/Hero";
import theme  from "./../styles/theme";

function Coaching() {
    return (
        <>
            <Hero secondary bgHero={theme.colors.primary.RoyalPurple} heroDetails={{title: "STRIKE 9 ACADEMY COACHING TEAM", paragraph: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, corporis."}}>
                <Container>
                    <div className="p-5"></div>
                    <div className="p-5"></div>
                </Container>
            </Hero>
            <Styled.CoachingInformation className="ms-auto">
                <Container>
                    <Row>
                        <Col md={{span: 6, order: "last"}} sm>
                            <Styled.ImageWrapper>
                                <img src="https://www.strike9-training.com/S9/wp-content/uploads/2021/07/camp-2.jpg" alt=""/>
                            </Styled.ImageWrapper>
                        </Col>
                        <Col md={{span: 6, order: "first"}} sm>
                            <Styled.List>
                                <Styled.Point>
                                    <h3>BOYS DEVELOPMENT</h3>
                                </Styled.Point>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi eveniet odio tempore quia, sapiente hic placeat nulla similique harum error?</p>
                            </Styled.List>
                        </Col>
                    </Row>
                </Container>
            </Styled.CoachingInformation>

            <Styled.CoachingInformation secondary>
                <Container>
                    <Row>
                        <Col md={6} sm>
                            <Styled.ImageWrapper secondary>
                                <img src="https://www.strike9-training.com/S9/wp-content/uploads/2021/07/camp-3.jpg" alt=""/>
                            </Styled.ImageWrapper>
                        </Col>
                        <Col md={6} sm>
                            <Styled.List>
                                <Styled.Point>
                                    <h3>GIRLS DEVELOPMENT</h3>
                                </Styled.Point>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi eveniet odio tempore quia, sapiente hic placeat nulla similique harum error?</p>
                            </Styled.List>
                        </Col>
                    </Row>
                </Container>
            </Styled.CoachingInformation>
            
            <Styled.CoachingInformation className="ms-auto">
                <Container>
                    <Row>
                        <Col md={{span: 6, order: "last"}} sm>
                            <Styled.ImageWrapper>
                                <img src="https://www.strike9-training.com/S9/wp-content/uploads/2021/07/camp-2.jpg" alt=""/>
                            </Styled.ImageWrapper>
                        </Col>
                        <Col md={{span: 6, order: "first"}} sm>
                            <Styled.List>
                                <Styled.Point>
                                    <h3>HEALTH & WELBEING</h3>
                                </Styled.Point>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi eveniet odio tempore quia, sapiente hic placeat nulla similique harum error?</p>
                            </Styled.List>
                        </Col>
                    </Row>
                </Container>
            </Styled.CoachingInformation>

            <Styled.CoachingInformation secondary>
                <Container>
                    <Row>
                        <Col md={6} sm>
                            <Styled.ImageWrapper secondary>
                                <img src="https://www.strike9-training.com/S9/wp-content/uploads/2021/07/camp-3.jpg" alt=""/>
                            </Styled.ImageWrapper>
                        </Col>
                        <Col md={6} sm>
                            <Styled.List>
                                <Styled.Point>
                                    <h3>ACCESSIBILITY</h3>
                                </Styled.Point>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi eveniet odio tempore quia, sapiente hic placeat nulla similique harum error?</p>
                            </Styled.List>
                        </Col>
                    </Row>
                </Container>
            </Styled.CoachingInformation>

            <Styled.CoachingInformation className="ms-auto">
                <Container>
                    <Row>
                        <Col md={{span: 6, order: "last"}} sm>
                            <Styled.ImageWrapper>
                                <img src="https://www.strike9-training.com/S9/wp-content/uploads/2021/07/camp-2.jpg" alt=""/>
                            </Styled.ImageWrapper>
                        </Col>
                        <Col md={{span: 6, order: "first"}} sm>
                            <Styled.List>
                                <Styled.Point>
                                    <h3>MATCHDAY</h3>
                                </Styled.Point>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi eveniet odio tempore quia, sapiente hic placeat nulla similique harum error?</p>
                            </Styled.List>
                        </Col>
                    </Row>
                </Container>
            </Styled.CoachingInformation>
        </>
    )
}

export default Coaching;
