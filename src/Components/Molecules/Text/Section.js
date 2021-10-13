import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "./../../Atoms/Form/Button";

const StyledSection = styled.section`

    h2 {
        padding-bottom: .5rem;
    }

    

`;

function Section({content}) {
    return (
        <StyledSection>
            <h2>{content.title}</h2>
            <p>{content.paragraph}</p>
            <Button text="TEST" />
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
