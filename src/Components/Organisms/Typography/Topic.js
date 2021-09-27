import Title from "./../../Atoms/Typography/Title";
import Paragraph from "./../../Atoms/Typography/Paragraph";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import Pattern from "./../../../assets/Pattern-A.svg";

const StyledTopicImage = styled.div`
    height: 100%;
    width: 100%;

    &::before {
        content: '';
        position: absolute;
        width: 150px;
        height: 100px;
        margin-top: -50px;
        margin-left: 5vw;
        left: 10px;
        background: url(${Pattern});
        z-index: -1
    }

    img {
        height: 100%;
        width: 100%;
    }

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        padding: 10%;
    }

`;

const StyledTopicInfo = styled.div`
    height: 100%;
    width: 100%;
    padding: 10%;
    padding-bottom: 25%;

    p {
        margin-top: 5%;
    }

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        padding-bottom: 0;
    }

`;

function Topic({src, alt, float}) {


    return (
        <Container fluid>
            <Row>
                <Col lg={{span: 6, order: 1}} xs={{span: 12, order: 2}}>
                    <StyledTopicImage>
                        <img src="https://www.strike9-training.com/S9/wp-content/uploads/2021/04/S9-wc_1-300x300.jpg" alt="" />
                    </StyledTopicImage>
                </Col>
                <Col lg={{span: 6, order: 2}} xs={{span: 12, order: 1}}>
                    <StyledTopicInfo>
                        <Title float={{right: true}} title="ABOUT US" />
                        <Paragraph float={{right: true}} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maxime fuga vero saepe ut, totam officiis voluptatum laborum cupiditate provident." />
                    </StyledTopicInfo>
                </Col>
            </Row>
            <Row style={{backgroundColor: '#F5F4F9', marginTop: "-30vh"}}>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
                <div className="p-5"></div>
            </Row>
        </Container>
    )
}

export default Topic
