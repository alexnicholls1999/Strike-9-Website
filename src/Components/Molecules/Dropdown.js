import React from 'react'
import styled from 'styled-components'

import Select from '../Atoms/Form/Select'

function Dropdown(props) {
    const { text, value, handleChange, name, style, ...otherProps } = props;


    return (
        <>
            <label>
                {text}
            </label>

            <Select style={style} value={value} defaultName={name} handleChange={handleChange} {...otherProps}/>
        </>
    )
}

export default Dropdown;