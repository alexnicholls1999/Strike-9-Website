import PropTypes from "prop-types";
import styled from "styled-components";
import PatternA from "./../../../assets/PatternA.svg";

const StyledPattern = styled.div` 
    height: 5rem;
    display: ${({noDisplay}) => noDisplay ? "none" : "block"};
    max-width: 100%;
    margin-left: max(5vw, 1rem);
    background: url(${PatternA});
    background-size: contain;
    background-repeat: no-repeat;
`;


function Pattern({noDisplay}) {
    return <StyledPattern noDisplay={noDisplay}/>
}

Pattern.propTypes = {
    noDisplay: PropTypes.bool
}

export default Pattern;
