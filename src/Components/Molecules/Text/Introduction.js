import PropTypes from "prop-types";
import styled from "styled-components";

const StyledIntroduction = styled.div`
    // text-align: ${({center}) => center ? "center" : "left"};
    // color: ${({theme}) => theme.colors.neutral[100]};
`;

function Introduction({content, center}) {
    return (
        <StyledIntroduction center={center}>
            <h1>{content.title}</h1>
            <p>{content.text}</p>
        </StyledIntroduction>
    )
}

Introduction.propTypes = {
    center: PropTypes.bool,
    content: PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string
    })
}

export default Introduction
