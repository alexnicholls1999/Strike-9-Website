import styled from "styled-components";

const Dot = styled.div`
    padding: ${({active}) => (active ? "7.5px" : "5px")};
    margin-right: 10px;
    cursor: pointer;
    border-radius: 50%;
    background: ${({theme, active}) => (active ? `${theme.colors.primary.DaisyBush}` : `${theme.colors.neutral.LightGrey}`)};
`;

export default Dot;