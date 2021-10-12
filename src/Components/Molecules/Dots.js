import PropTypes from "prop-types";
import styled from "styled-components";
import Dot from "../Atoms/Iconography/Dot";

const StyledDotsContainer = styled.div`
    padding: 3rem 0 ;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10%;

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        padding: 5rem 0 0        
    }
`;



function Dots({slideIndex, moveDot}) {
    return (
        <StyledDotsContainer>
            {Array.from({length: 5}).map((item, index) => <Dot active={slideIndex === index + 1} onClick={() => moveDot(index + 1)}/>)}
        </StyledDotsContainer>
    )
}

// Dots.propTypes = {
//     slideIndex: PropTypes.any.isRequired,
//     moveDot: PropTypes.func.isRequired
// }


export default Dots
