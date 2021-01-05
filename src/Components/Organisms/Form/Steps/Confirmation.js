import React from 'react'
import styled from 'styled-components'

const StyledConfirmation = styled.div `

    text-align: center;
    width: 50%;
    margin: 0 auto;

`;


const Title = styled.h3 `
    color: ${({theme}) => theme.colors.primary.RoyalPurple};
    font-weight: bold;
`;

function Confirmation() {
    return (
        <StyledConfirmation>
            <Title className="py-3">Your Booking is Complete!</Title>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className="p-3"></div>
        </StyledConfirmation>
    )
}

export default Confirmation
