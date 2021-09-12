import * as Styled from "./../styles/PageStyles/AboutStyles";
import Button from "../Components/Atoms/Buttons/Button";
import Hero from "../Components/Organisms/Hero";
import { Container, Col, Row } from "react-bootstrap";
import GreyBorder from "../Components/Atoms/GreyBorder";

function About() {
    return (
        <>
            <Hero secondary black heroDetails={{title: "ABOUT STRIKE 9 TRAINING", paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt recusandae eos tempora harum cupiditate eveniet vitae optio vero facilis itaque."}} >
                <Row> 
                    <Col md={4}>
                    <Styled.ButtonWrapper>
                        <Button text="REGISTER" />
                    </Styled.ButtonWrapper>
                    </Col>

                    <Col md={8}>
                        <Styled.ImageGallery>
                            <Row>
                                <Col md={4}>
                                    <img id="one" src="https://www.strike9-training.com/S9/wp-content/uploads/2021/04/S9-wc_1-300x300.jpg" alt="" srcset=""/>
                                </Col>
                                <Col md={4}>
                                    <img id="two" src="https://www.strike9-training.com/S9/wp-content/uploads/2021/04/S9-wc_3-400x400.jpg" alt="" srcset=""/>
                                </Col>
                            </Row>    
                            <br />
                            <Row>
                                <Col md={2}></Col>
                                <Col md={2}>     
                                    <img id="three" src="https://www.strike9-training.com/S9/wp-content/uploads/2021/07/camp-1.jpg" alt="" srcset=""/>
                                </Col>
                                <Col md={4}>
                                    <img id="four" src="https://www.strike9-training.com/S9/wp-content/uploads/2021/07/camp-4.jpg" alt="" srcset=""/>
                                </Col>    
                            </Row>                
                        </Styled.ImageGallery>
                    </Col>
                </Row>

                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>

            </Hero>
            <Styled.Section>
                <Container>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore obcaecati architecto ratione iure error at cum optio, voluptas provident voluptatibus.</p>
                </Container>
            </Styled.Section>
            <Styled.AboutInformation className="ms-auto">
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
                                    <h3>EVENTS ACTIVITIES</h3>
                                </Styled.Point>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi eveniet odio tempore quia, sapiente hic placeat nulla similique harum error?</p>
                            </Styled.List>
                        </Col>
                    </Row>
                </Container>
            </Styled.AboutInformation>

            <Styled.AboutInformation secondary>
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
                                    <h3>HOLIDAY CLUBS</h3>
                                </Styled.Point>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi eveniet odio tempore quia, sapiente hic placeat nulla similique harum error?</p>
                            </Styled.List>
                        </Col>
                    </Row>
                </Container>
            </Styled.AboutInformation>
            
            <Styled.Strike9Team>
                <Container>
                    <Row>
                        <Col md={{span: 6, order: "last"}} sm>
                            <Styled.ImageWrapper>
                                <img src="https://www.strike9-training.com/S9/wp-content/uploads/2021/04/Dele-Crewe-picture-e1619363644855.png" alt=""/>
                            </Styled.ImageWrapper>
                        </Col>
                        <Col md={{span: 6, order: "first"}} sm>
                            <Styled.List>
                                <Styled.Point>
                                    <h4>DELE ADEBOLA</h4>
                                </Styled.Point>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi eveniet odio tempore quia, sapiente hic placeat nulla similique harum error?</p>
                            </Styled.List>
                        </Col>
                    </Row>
                </Container>
            </Styled.Strike9Team>
        </>
    )
}

export default About;
