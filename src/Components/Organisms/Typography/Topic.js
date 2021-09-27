import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Pattern from "./../../../assets/Pattern-A.svg";

import Title from "./../../Atoms/Typography/Title";
import Paragraph from "./../../Atoms/Typography/Paragraph";
import Button from "./../../Atoms/Form/Button";

const StyledImage = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    padding: 5%;

    img {
        width: 100%;
        margin: 0 auto;
    }

    @media(min-width: ${({theme}) => theme.viewport.lg}) {
        img {
            position: absolute;
            width: 75%;
        }
    }
`;

const StyledInfo = styled.div`
    width: 100%;
    padding: 5%;

    @media(min-width: ${({theme}) => theme.viewport.md}) {

        p {
            padding-top: 5vh;
            width: 75%;
        }
    }

    @media(min-width: ${({theme}) => theme.viewport.xl}) {
        p {
            line-height: 2;
        }
    }
`;

const StyledTopicButtonWrapper = styled.div`
    width: 150px;
    align-items: self-start;
    position: absolute;
`;


function Topic({src, alt, float}) {
    return (
        <Container fluid>
                <Row>
                    <Col md={6} sm>
                        <StyledImage>
                            <img src={src} alt={alt}/>
                        </StyledImage>
                    </Col>
                    <Col md={6} sm>
                        <StyledInfo>
                            <Title title="ABOUT US" float={float}/>
                            <Paragraph float={float} text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ducimus nesciunt quasi numquam facere dolorum, libero aliquid vero possimus illo." />  
                            <StyledTopicButtonWrapper>
                                <Button text="REGISTER" />
                            </StyledTopicButtonWrapper>
                        </StyledInfo>
                    </Col>
                </Row>        
                <Row style={{backgroundColor: '#F5F4F9'}}>                    
                    <div className="p-5"></div>
                    <div className="p-5"></div>
                    <div className="p-5"></div>
                    <div className="p-5"></div>
                </Row>
        </Container>
    )
}

export default Topic
