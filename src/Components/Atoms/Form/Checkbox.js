import styled from "styled-components";
import PropTypes from "prop-types";

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 3px;
    margin-top: -15px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox"})`
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
    background: ${({checked}) => (checked ? "#4D2AA5" : "#4D2AA5")};
    border: 2px solid #8567d4;
    border-radius: 3px;
    transition: all 150ms;
    
    ${Icon} {
        visibility: ${({checked}) => (checked ? "visible" : "hidden")};
    }
`;

function Checkbox({checked, ...props}) {
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

Checkbox.defaultProps = {
    checked: false
}

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired
}

export default Checkbox;