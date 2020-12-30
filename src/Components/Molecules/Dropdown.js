import React from 'react'
import styled from 'styled-components'

import Select from '../Atoms/Form/Select'

function Dropdown(props) {
    const { text, value, handleChange, style, ...otherProps } = props;


    return (
        <>
            <label>
                {text}
            </label>

            <Select style={style} value={value} handleChange={handleChange} {...otherProps}/>
        </>
    )
}

export default Dropdown;