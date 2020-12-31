import React from 'react';
import Dropdown from '../Dropdown';
import styled from 'styled-components';

function Gender(props) {

    const {handleGenderChange, gender} = props;

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
        <Dropdown style={{width: "350px"}} {...configGender} />
    )
}

export default Gender;