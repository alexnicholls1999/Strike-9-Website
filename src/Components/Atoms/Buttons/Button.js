import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
    height: 45px;
    background: ${({theme}) => theme.colors.primary.RoyalPurple};
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
    font-weight: ${({theme}) => theme.typography.fontWeight.bold};
    box-shadow: 0px 0px 17px 2px ${({theme}) => theme.colors.primary.RoyalPurple};

    &:disabled {
        background-color: ${({ theme }) => theme.colors.primary.RoyalPurple};
        border-color: ${({ theme }) => theme.colors.primary.RoyalPurple};
        opacity: 0.6;
    }
`;

function Button({ text, onClick, ...props}) {
    return <StyledButton onClick={onClick} {...props}>{text}</StyledButton>
}

Button.defaultProps = {
    onClick: () => {}
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button
