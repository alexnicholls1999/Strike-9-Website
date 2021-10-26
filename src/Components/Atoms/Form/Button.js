import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: ${({theme}) => theme.colors.primary[600]};
    border: none;
    color: white;
    padding: 0.75rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 0.7rem;
    font-weight: ${({theme}) => theme.typography.fontWeight.bold};
    border-radius: 7px;
    width: ${({form}) => form ? "100%" : "9rem"};

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        width: 9rem;
    }

    @media(min-width: ${({theme}) => theme.viewport.xl}) {
        width: ${({form}) => form ? "11rem" : "15rem"};
        padding: 1rem;
        font-size: 1rem;
    }
`;

function Button({onClick, form, text, ...props}) {
    return <StyledButton form={form} onClick={onClick} {...props}>{text}</StyledButton>
}

Button.propTypes = {
    form: PropTypes.bool,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button
