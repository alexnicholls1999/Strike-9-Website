import { CheckBox } from '@material-ui/icons';
import React, { Children } from 'react';
import styled from 'styled-components';

const StyledCheckBox = styled.div`

    span {    
        color: white;
        font-weight: 600;
    }



`;


function Checkbox ({checked, text, ...props}) {
    return (
            <StyledCheckBox>
                <input type="checkbox" checked={checked} {...props}/>
                <span style={{marginLeft: 8}}>{text}</span>
            </StyledCheckBox>
    )
}

export default Checkbox;
