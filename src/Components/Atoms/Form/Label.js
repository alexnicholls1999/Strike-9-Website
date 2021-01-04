import React from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`
    color: black;
    font-weight: bold;

`;


function Label({children}) {
    return (
        <StyledLabel>{children}</StyledLabel>
    )
}

export default Label;
