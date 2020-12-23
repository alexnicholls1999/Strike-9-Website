import React from 'react'
import styled from 'styled-components'

import Select from '../Atoms/Form/Select'

const StyledLabel = styled.label`


`

function SearchFilter(props) {
    const { label } = props;


    return (
        <div>
            {label && (
                <StyledLabel>
                    {label}
                </StyledLabel>
            )}

            <Select/>
            

        </div>
    )
}

export default SearchFilter;