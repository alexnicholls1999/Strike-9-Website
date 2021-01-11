import React from 'react';
import styled from 'styled-components';
import {Formik, useFormikContext} from "formik";

const StyledInput = styled.input`
    font-size: 15px;
    padding: 10px;
    width: 350px;
    border-radius: 3px;
    border: 1px solid #F4F4F4;
    display: block;
`;

function Input(props) {

    const formik = useFormikContext();
    const {value, type, style, placeholder } = props;

    return (
        <StyledInput value={value} style={style} onChange={formik.handleChange} type={type} placeholder={placeholder} />
    )
}

export default Input;