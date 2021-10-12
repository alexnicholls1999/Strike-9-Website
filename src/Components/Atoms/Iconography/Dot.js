import styled from "styled-components"


const Dot = styled.div`
    padding: ${({active}) => active ? ".5rem" : ".4rem"};
    margin-right: .75rem;
    cursor: pointer;
    border-radius: 50%;
    background: ${({theme, active}) => active ? theme.colors.primary[500] : theme.colors.neutral[300]};
`;


export default Dot;