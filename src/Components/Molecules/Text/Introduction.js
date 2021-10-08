import PropTypes from "prop-types";
import styled from "styled-components";

const StyledIntroduction = styled.section`
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-align: ${({center}) => center ? "center" : "left"};
    padding: 3rem 0;

    p {
        padding-top: 1rem;
    }

    @media(min-width: ${({theme}) => theme.viewport.lg}) {
        padding-top: 25%;
        p {
            margin-inline: auto;
            width: 50%;
        }
    }
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
