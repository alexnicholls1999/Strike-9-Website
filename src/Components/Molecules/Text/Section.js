import PropTypes from "prop-types";
import styled from "styled-components";

function Section({content}) {
    return (
        <>
            <h2>{content.title}</h2>
            <p>{content.text}</p>
        </>
    )
}

Section.propTypes = {
    content: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default Section;
