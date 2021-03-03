import React from 'react'
import styled from "styled-components";

const StyledCard = styled.div`
    border-radius: 0;
    border: none;
    box-shadow: 0 5px 29px 0 hsla(240, 18%, 77%, 0.52);
`;

function Card({className, style, children}) {
    return (
        <StyledCard className={className} style={style}>{children}</StyledCard>
    )
}

export default Card;
