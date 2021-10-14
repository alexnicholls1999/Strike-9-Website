import PropTypes from "prop-types";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Section from '.././Molecules/Text/Section';

const StyledTopicWrapper = styled.div`
    background-color: ${({theme, secondary}) => secondary ? theme.colors.primary[200] : "none"};
    padding: 1rem;
    display: flex;
    flex-flow: column-reverse;

    > * {
        flex-basis: 100%;
    }

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        flex-flow: ${({secondary}) => secondary ? "row" : "row-reverse"};
        padding: 3rem 0;
    }


`;


const StyledTopicImage = styled.div`
    padding: 1.5rem 1rem;
    

    @media(min-width: ${({theme}) => theme.viewport.lg}) {
        padding: 0 3rem;
    }
`;

const StyledTopicInfo = styled.div`
    text-align: left;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 3rem 0;


    @media(min-width: ${({theme}) => theme.viewport.lg}) {
        text-align: ${({secondary}) => secondary ? "right" : "left"}; 
        justify-content: ${({secondary}) => secondary ? "flex-end" : "flex-start"};
        padding: 0 1rem;
        
        > * {        
            width: 65%;
        }
    }
`;

function Topic({topic, secondary}) {
    return (
        <StyledTopicWrapper secondary={secondary}>
            <StyledTopicImage>
                <img src={topic.img.src} alt={topic.img.alt}/>
            </StyledTopicImage>
            <StyledTopicInfo secondary={secondary}>
                <Section alternate={secondary} content={{title: topic.title, paragraph: topic.paragraph}} />
            </StyledTopicInfo>
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
