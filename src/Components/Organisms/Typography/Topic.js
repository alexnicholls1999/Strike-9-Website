import Title from "./../../Atoms/Typography/Title";
import Paragraph from "./../../Atoms/Typography/Paragraph";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import Pattern from "./../../../assets/Pattern-A.svg";

const StyledWrapper = styled.div`
    width: 100vw;
`;

const StyledTopicWrapper = styled.div`
    display: flex;
    flex-flow: column-reverse;
    width: 100%;

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        flex-flow: row;
    }
`;

const StyledTopicImage = styled.div`
    height: 100%;
    width: 100%;
    padding: 10%;

    img {
        height: 100%;
        width: 100%;
    }

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        padding: 5%;
    }

`;

const StyledTopicInfo = styled.div`
    height: 100%;
    width: 100%;
    padding: 5% 0;
    padding-right: 5%;

    p {
        margin-top: 5%;
    }

`;

function Topic({src, alt, float}) {
    return (
        <Container fluid>
            <StyledTopicWrapper>
                <StyledTopicImage>
                    <img src="https://www.strike9-training.com/S9/wp-content/uploads/2021/04/S9-wc_1-300x300.jpg" alt="" />
                </StyledTopicImage>
                <StyledTopicInfo>
                    <Title float={{right: true}} title="ABOUT US" />
                    <Paragraph float={{right: true}} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maxime fuga vero saepe ut, totam officiis voluptatum laborum cupiditate provident." />
                </StyledTopicInfo>
            </StyledTopicWrapper>
        </Container>
    )
}

export default Topic
