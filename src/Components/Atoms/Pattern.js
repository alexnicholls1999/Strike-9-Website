import styled from "styled-components";
import PatternA from "./../../assets/PatternA.svg";

const StyledPattern = styled.div` 
    height: 5rem;
    max-width: 100%;
    margin-left: max(5vw, 1rem);
    background: url(${PatternA});
    background-size: contain;
    background-repeat: no-repeat;
`;


function Pattern() {
    return <StyledPattern />
}

export default Pattern;
