import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import Strike9Wallpaper from "../../assets/Images/s9cover.jpg"


const StyledWallpaper = styled.div`
    height: ${({secondary}) => secondary ? "auto" : "100vh"};
    background: ${({theme, secondary}) => secondary ? theme.colors.primary.RoyalPurple : `url(${Strike9Wallpaper})`};
    background-size: cover;
    background-position: center;
    box-shadow: ${({secondary}) => secondary ? "none" : "inset 0 0 0 100vmax rgb(5 10 43 / 84%)"};
    top: 0;
    right: 0;
    z-index: -1;

    
`

function Wallpaper({children, secondary}) {
    return (
        <StyledWallpaper secondary={secondary}>
            {children}
        </StyledWallpaper>
    )
}

Wallpaper.propTypes = {
    secondary: PropTypes.bool
}

Wallpaper.defaultProps = {
    secondary: false
}

export default Wallpaper;
