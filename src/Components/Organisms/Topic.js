import PropTypes from "prop-types";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Section from '.././Molecules/Text/Section';

const StyledTopicWrapper = styled.div`
    background-color: ${({theme, secondary}) => secondary ? theme.colors.primary[200] : "none"};
    padding: 3rem 0;
`;


const StyledTopicImage = styled.div`
    display: flex;
    justify-content: space-around;


`;

const StyledTopicInfo = styled.div`
    text-align: left;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 3rem 0;


    @media(min-width: ${({theme}) => theme.viewport.lg}) {
        text-align: right;
        align-items: flex-end;
        justify-content: flex-end;    
        padding: 0 1rem;
        
        > * {        
            width: 60%;
        }
    }
`;

function Topic({topic, secondary}) {
    return (
        <StyledTopicWrapper secondary={secondary}>
            <Container fluid>
                <Row>
                    <Col md={6}>
                        <StyledTopicImage>
                            <img src={topic.img.src} alt={topic.img.alt} />
                        </StyledTopicImage>
                    </Col>
                    <Col md={6}>
                        <StyledTopicInfo>
                            <Section content={{title: topic.title, paragraph: topic.paragraph}} />
                        </StyledTopicInfo>
                    </Col>
                </Row>
            </Container>
        </StyledTopicWrapper>

    )
}

Topic.propTypes = {
    secondary: PropTypes.bool,
    topic: PropTypes.shape({
        img: PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired
        }),
        title: PropTypes.string.isRequired,
        paragraph: PropTypes.string
    })
}

export default Topic
