import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledButton = styled.button`
    height: 45px;
    background: ${({theme}) => theme.colors.primary.DaisyBush};
    border-radius: 7px;
    color: ${({theme}) => theme.colors.neutral.White};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 6%;
    border: none;
    width: 100%;
    font-size: 12px;
    font-weight: 700;
    box-shadow: 0px 0px 17px 2px ${({theme}) => theme.colors.primary.DaisyBush};
    &:disabled {
        background-color: ${({ theme }) => theme.colors.primary.DaisyBush};
        border-color: ${({ theme }) => theme.colors.primary.DaisyBush};
        opacity: 0.6;
    }
`;

function Button({onClick, text, disabled, ...props}) {
    return (
        <StyledButton onClick={onClick} disabled={disabled} {...props} >{text}</StyledButton>
    )
}

Button.defaultProps = {
    disabled: false,
    text: '',
    onClick: () => {}
}

Button.propTypes = {
    disabled: PropTypes.bool,    
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button;