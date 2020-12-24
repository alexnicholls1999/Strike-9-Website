import React from 'react'
import styled from 'styled-components'


const StyledSelect = styled.select`



`;

function Select ({ options, defaultValue, handleChange}) {
    if (!Array.isArray(options) || options.length < 1) return null;
  
    return ( 
        <StyledSelect className="form-control" value={defaultValue} onChange={handleChange}>
          {options.map((option, index) => {
            const { value, name } = option;
  
            return (
              <option key={index} value={value}>{name}</option>
            );
          })}
        </StyledSelect>
    );
  }
  
export default Select;
