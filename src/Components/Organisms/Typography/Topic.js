import Title from "./../../Atoms/Typography/Title";
import Paragraph from "./../../Atoms/Typography/Paragraph";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import Pattern from "./../../../assets/Pattern-A.svg";

const StyledImageWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;

    img {
        width: 100%;
        margin: 0 auto;
        border-radius: 5px;
    }

    &::before {
        content: '';
        height: 100px;
        width: 150px;
        z-index: -1;
        margin-top: -50px;
        background: url(${Pattern});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
        position: absolute;
        right: 10px;
    }

    @media (min-width: ${({theme}) => theme.viewport.lg}){
        &::before {
           left: 10%;
           height: 200px;
           margin-top: -65px;
        }

        img {
            padding: 7.5%;
            border-radius: 15px;
        }

        
    } 
`;

const StyledTextWrapper = styled.div`

    
    &::after {
        content: '';
        padding: 20%;
        position: absolute;
        background: #F5F4F9;
        z-index: -1;
        width: 100vw;
        left: 0;
    }

`;


function Topic({src, alt, float}) {
    return (
        <Row>
            <Col md={6}>
                <StyledImageWrapper>
                    <img style={{width: "100%"}} src={src} alt={alt}/>
                </StyledImageWrapper>
            </Col>
            <Col md={6}>
                <StyledTextWrapper>
                    <Title title="ABOUT US" float={float}/>
                    <Paragraph float={float} text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ducimus nesciunt quasi numquam facere dolorum, libero aliquid vero possimus illo." />  
                    <div className="p-5"></div>
                </StyledTextWrapper>
            </Col>
        </Row>
    )
}

export default Topic
