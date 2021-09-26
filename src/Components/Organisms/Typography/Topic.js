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
`;

function Topic({src, alt, float}) {
    return (
        <Row>
            <Col md={6} xs={{span: 12, order: "last"}}>
                <StyledImageWrapper>
                    <img style={{width: "100%"}} src={src} alt={alt}/>
                </StyledImageWrapper>
            </Col>
            <Col md={6} xs={{span: 12, order: "first"}}>
                <Title title="ABOUT US" float={float}/>
                <Paragraph float={float} text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ducimus nesciunt quasi numquam facere dolorum, libero aliquid vero possimus illo." />  
            </Col>
        </Row>
    )
}

export default Topic
