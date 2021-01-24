import { CheckBox } from '@material-ui/icons';
import React, { Children } from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 3px;
    margin-top: -5px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox'})`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const StyledCheckbox = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    background: ${(props) => (props.checked ? '#4D2AA5' : '#4D2AA5')};
    border: 2px solid #8567d4;
    border-radius: 3px;
    transition: all 150ms;

    ${Icon} {
        visibility: ${(props) => (props.checked ? 'visible' : 'hidden')
    }

`;

function Checkbox ({checked, text, ...props}) {
    return (
            <CheckboxContainer>
                <HiddenCheckbox checked={checked} {...props}/>
                <StyledCheckbox checked={checked}>
                    <Icon viewBox="0 0 24 24">      
                        <polyline points="20 6 9 17 4 12" />
                    </Icon>
                </StyledCheckbox>
            </CheckboxContainer>
    )
}

export default Checkbox;
