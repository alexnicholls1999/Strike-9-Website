import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

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
    font-weight: 700;
    box-shadow: 0px 0px 17px 2px ${({theme}) => theme.colors.primary.RoyalPurple};

`;

function Button({onClick, linkto, text, ...Props}) {
    return (
        <StyledButton onClick={onClick} {...Props} >{text}</StyledButton>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    onClick: () => {}
}

export default Button
