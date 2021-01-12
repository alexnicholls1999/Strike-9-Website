import React from 'react';
import styled from 'styled-components';
import { useFormikContext } from 'formik';

import Label from "./../../Atoms/Form/Label";
import ErrorMessage from "./../../Atoms/Form/ErrorMessage";

function Gender(props) {

    const {handleGenderChange, onBlur, onChange, gender, value} = props;
    const formik = useFormikContext();

    const configGender = {
        value: gender, 
        options: [
            {
                name: "Choose Gender"
            },
            {
                name: "Male"
            },
            {
                name: "Female"
            }
        ],
        handleChange: handleGenderChange
    }


    return (
        // <Dropdown style={{width: "350px"}} {...configGender} />
        <>
            <Label style={formik.errors.gender ? {color: "#C90808"} : null}>Mobile</Label>
            <select name="gender" value={formik.values.gender} class="form-control dropdown" onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option value="">Enter Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <ErrorMessage>{formik.errors.gender}</ErrorMessage>
        </>
       )
}

export default Gender;