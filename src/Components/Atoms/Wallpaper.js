import PropTypes from "prop-types";
import styled from 'styled-components';
import Strike9Wallpaper from "../../assets/Images/s9cover.jpg"


const StyledWallpaper = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    background: url(${Strike9Wallpaper});
    background-size: cover;
    background-position: center;
    box-shadow: inset 0 0 0 100vmax rgb(5 10 43 / 84%);
    top: 0;
    right: 0;
    z-index: -1;    
`

function Wallpaper({children}) {
    return (
        <StyledWallpaper>
            {children}
        </StyledWallpaper>
    )
}

export default Wallpaper;

