import React from 'react';
import styled from 'styled-components'

const StyledInput = styled.input`
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    border: none;
    border-radius: 3px;
    
`;

function Input(props) {

    return (
        <StyledInput type={props.type} placeholder={props.placeholder} />
    )
}

export default Input;