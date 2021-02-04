import React from 'react';
import styled from 'styled-components';
import Strike9Wallpaper from "../../assets/Images/s9cover.jpg"


const StyledWallpaper = styled.img`
    height: 100vh;
    background-image: url(${Strike9Wallpaper});
    background-size: cover;
    background-position: center;
    box-shadow: inset 0 0 0 100vmax rgb(5 10 43 / 84%);
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;

`

function Wallpaper() {
    return (
        <StyledWallpaper />
    )
}

export default Wallpaper;