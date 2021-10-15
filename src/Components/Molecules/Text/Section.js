import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "./../../Atoms/Form/Button";

const StyledSection = styled.section`

    h2 {
        padding-bottom: 1rem;
    }


`;

const StyledSectionButtonWrapper = styled.div`
    width: 100%;
    padding: 4rem 0;
    display: ${({active}) => active ? "block" : "none"};

    button {
       float: ${({alternate}) => alternate ? "left" : "right"};

    }
`;

function Section({content, alternate}) {
    return (
        <StyledSection>
            <h2>{content.title}</h2>
            <p>{content.paragraph}</p>
            <StyledSectionButtonWrapper active={content.button.active} alternate={alternate}>
                <Button text={content.button.text} />
            </StyledSectionButtonWrapper>
        </StyledSection>
    ) 
}

Section.propTypes = {
    content: PropTypes.shape({
        title: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired,
        button: PropTypes.shape({
            active: PropTypes.bool,
            text: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired
        })
    })
}

export default Section;
