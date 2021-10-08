import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSection = styled.section`
    padding: 3rem 0;
`;

function Section({content}) {
    return (
        <StyledSection>
            <h2>{content.title}</h2>
            <p>{content.paragraph}</p>
        </StyledSection>
    )
}

Section.propTypes = {
    content: PropTypes.shape({
        title: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired
    })
}

export default Section;
