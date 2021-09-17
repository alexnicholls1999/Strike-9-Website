import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
    height: 45px;
    background: ${({theme, secondary}) => secondary ? theme.colors.primary.White : theme.colors.primary.DaisyBush};
    border-radius: 7px;
    color:  ${({theme, secondary}) => secondary ? theme.colors.primary.DaisyBush : theme.colors.primary.White}};
    border: none;
    width: 100%;
    font-size: clamp(12px, 2vh, 3vh);
    font-weight: ${({theme}) => theme.typography.fontWeight.bold};
    box-shadow: 0px 0px 17px 2px ${({theme}) => theme.colors.primary.DaisyBush};
`;

function Button({ text, secondary , onClick }) {
    return <StyledButton secondary={secondary} onClick={onClick}>{text}</StyledButton>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button
