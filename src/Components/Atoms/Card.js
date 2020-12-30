import React from 'react'
import styled from 'styled-components';

const StyledCard = styled.div`
    border-radius: 0;
    border: none;
    box-shadow: 0 5px 29px 0 hsla(240, 18%, 77%, 0.52);
    margin: 2rem;
`;

function Card(props) {
    return (
        <StyledCard className={props.className} style={props.style}>{props.children}</StyledCard>
    )
}

export default Card;