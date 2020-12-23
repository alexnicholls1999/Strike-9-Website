import React from 'react'
import styled from 'styled-components'


const StyledSelect = styled.select`



`;

function Select ({ options, defaultValue, handleChange, label, ...otherProps }) {
    if (!Array.isArray(options) || options.length < 1) return null;
  
    return (
      <div className="formRow">
        {label && (
          <label>
            {label}
          </label>
        )}
  
        <StyledSelect value={defaultValue} onChange={handleChange} {...otherProps}>
          {options.map((option, index) => {
            const { value, name } = option;
  
            return (
              <option key={index} value={value}>{name}</option>
            );
          })}
        </StyledSelect>
      </div>
    );
  }
  
export default Select;
