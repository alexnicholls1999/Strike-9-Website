import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

function BootstrapButton(props) {

    const StyledButton = styled(Button)`
        font-weight: bold;
        background-color: ${({ theme }) => theme.colors.primary.DaisyBush};
        border-color: ${({ theme }) => theme.colors.primary.DaisyBush};
        color: ${({ theme }) => theme.colors.neutral.White};
        padding: 0.75rem 2.25rem;
        width: 100%;
        box-shadow: ${({ theme, shadow }) => shadow ? `0 2px 20px 8px #BEA4FF` : 'none'};
        
        // float: right;

        &:hover {
            background: ${({ theme }) => theme.colors.primary.DaisyBush};
            border-color: ${({ theme }) => theme.colors.primary.DaisyBush};
        }

        @media (min-width: 768px) {
            width: 60% !important;
        }
    `;

    const {onClick, text, variant, type, size, style, shadow} = props;

    return (
        <>
            <StyledButton type={type} shadow={shadow} variant={variant} size={size} style={style} onClick={onClick}> {text} </StyledButton>
        </>
    )
}


export default BootstrapButton;