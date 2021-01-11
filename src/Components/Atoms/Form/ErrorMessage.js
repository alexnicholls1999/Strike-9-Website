import React from 'react';
import styled from "styled-components";

const ErrorLabel = styled.p`
    color: #C90808;

`

function ErrorMessage({children}) {
    return (
        <ErrorLabel>
            {children}
        </ErrorLabel>
    )
}

export default ErrorMessage;
