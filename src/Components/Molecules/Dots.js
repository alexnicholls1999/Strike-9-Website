import PropTypes from "prop-types";
import styled from "styled-components";
import Dot from "../Atoms/Dot";

const StyledDotsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10%;
`;


function Dots({ slideIndex, moveDot }) {
    return (
        <StyledDotsContainer>
            {Array.from({ length: 5}).map((item, index) => (
                <Dot
                    active={slideIndex === index + 1}
                    onClick={() => moveDot(index + 1)}
                />
            ))}
        </StyledDotsContainer>
    )
}

Dots.propTypes = {
    slideIndex: PropTypes.bool.isRequired,
    moveDot: PropTypes.func.isRequired
}

export default Dots
