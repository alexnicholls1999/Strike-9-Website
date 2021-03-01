import React from 'react'
import styled from 'styled-components'

const StyledSelect = styled.select`


`;

function Select({ options, defaultValue, defaultName, handleChange, style}) {

    if (!Array.isArray(options) || options.length < 1) return null;

    return (
        <StyledSelect style={style} className="form-control" name={defaultName} value={defaultValue} onChange={handleChange}>
            {options.map((option, index) => {
                const { value, name } = option;
                return (
                    <option key={index} value={value}>{name}</option>
                )
            })}
        </StyledSelect>
    )
}

export default Select
