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

    button {
       float: ${({alternate}) => alternate ? "left" : "right"};
    }
`;

function Section({content, alternate}) {
    return (
        <StyledSection>
            <h2>{content.title}</h2>
            <p>{content.paragraph}</p>
            <StyledSectionButtonWrapper alternate={alternate}>
                <Button text="TEST" />
            </StyledSectionButtonWrapper>
        </StyledSection>
    )
}

Section.propTypes = {
    content: PropTypes.shape({
        title: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired,
        button: PropTypes.shape({
            text: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired
        })
    })
}

export default Section;
