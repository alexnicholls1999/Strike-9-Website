import React from 'react'
import Select from '../Atoms/Forms/Select'

function Dropdown({text, value, handleChange, name, style, ...otherProps}) {
    return (
        <>
            <label>{text}</label>

            <Select style={style} value={value} defaultName={name} handleChange={handleChange} {...otherProps}/>   
        </>
    )
}

export default Dropdown;
