import React from 'react';
import styled from 'styled-components';
 

const StyledButton = styled.button`
    display: inline-block;
    text-align: center;
    whitespace: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.5;
    border-radius: .25rem;

    background-color: ${({ theme }) => theme.colors.primary.DaisyBush};
    border-color: ${({ theme }) => theme.colors.primary.DaisyBush};
    color: ${({ theme }) => theme.colors.neutral.White};
    padding: 1rem 2.25rem;
    width: 250px;
`;

function Button(props) {
    return (
        <>
            <StyledButton>
                {props.children}
            </StyledButton>
        </>
    )
}


export default Button;