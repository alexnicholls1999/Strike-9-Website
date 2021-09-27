import PropTypes from "prop-types";
import styled from "styled-components";
import {Button as BootstrapButton} from "react-bootstrap"

const StyledButton = styled(BootstrapButton)`
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    align-content: space-inbetween;
    width: 100%;
    background-color: ${({theme}) => theme.colors.primary.DaisyBush};
    border: none;
    padding: 12px;
    font-size: 15px;
    font-weight: ${({theme}) => theme.typography.fontWeight.bold};

    button {
        width: 150px;
        &:nth-child(1) {
            margin-right: 10px;
        }
    }

    @media (max-width: 330px) {
        button {
            width: 100px;
        }
    }
`;



function Button({ text, onClick }) {
    return <StyledButton onClick={onClick}>{text}</StyledButton>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button
