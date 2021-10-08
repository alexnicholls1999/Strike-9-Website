import PropTypes from "prop-types";
import styled from "styled-components";

const StyledIntroduction = styled.section`
    

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        p {
            width: 65%;
            margin-inline: auto;
        }
    }
`;

function Introduction({content}) {
    return (
        <StyledIntroduction>
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
