import PropTypes from "prop-types";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Section from '.././Molecules/Text/Section';
import PatternA from "./../../assets/PatternA.svg";

const StyledTopicWrapper = styled.div`
    position: relative;
    background-color: ${({theme, secondary}) => secondary ? theme.colors.primary[200] : "none"};
    padding: 1rem;
    display: flex;
    flex-flow: column-reverse;

    > * {
        flex-basis: 100%;
    }

    @media(min-width: ${({theme}) => theme.viewport.lg}) {
        flex-flow: ${({secondary}) => secondary ? "row" : "row-reverse"};
        padding: 3rem 0;
    }


`;


const StyledTopicImage = styled.div`
    padding: 1.5rem 0;
    margin-bottom: 3rem;
    
    &::after {
        display: ${({secondary}) => secondary ? "none" : "block"}; 
        content: '';
        position: absolute;
        z-index: -1;
        bottom: .5rem;
        left: 50%;
        transform: translateX(-50%);
        height: 6rem;
        width: 10rem;
        background: url(${PatternA});
        background-size: contain;
        background-repeat: no-repeat;
    }

    @media(min-width: ${({theme}) => theme.viewport.lg}) {
        padding: 0 3rem;
        margin-bottom: 0;

        &::after {
            display: ${({secondary}) => secondary ? "none" : "block"}; 
            content: '';
            position: absolute;
            z-index: -1;
            bottom: 40%;
            left: 50%;
            transform: translateX(-50%);
            height: 8rem;
            width: 12rem;
        }
    }
`;

const StyledTopicInfo = styled.div`
    text-align: left;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 3rem 0;

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        > * {        
            width: 65%;
        }
    }

    @media(min-width: ${({theme}) => theme.viewport.lg}) {
        text-align: ${({secondary}) => secondary ? "right" : "left"}; 
        justify-content: ${({secondary}) => secondary ? "flex-end" : "flex-start"};
        padding: 0 1rem;
    }

    @media(min-width: ${({theme}) => theme.viewport.xl}) {
        padding: 0 4.6875vw;
    }

`;

function Topic({topic, secondary}) {
    return (
        <StyledTopicWrapper secondary={secondary}>
            <StyledTopicImage secondary={secondary}>
                <img src={topic.img.src} alt={topic.img.alt}/>
            </StyledTopicImage>
            <StyledTopicInfo secondary={secondary}>
                <Section alternate={secondary} content={{title: topic.title, paragraph: topic.paragraph, button: { active: topic.button.active, text: topic.button.text}}} />
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
        button: PropTypes.shape({
            active: PropTypes.bool,
            text: PropTypes.string.isRequired
        }),
        title: PropTypes.string.isRequired,
        paragraph: PropTypes.string
    })
}

export default Topic
