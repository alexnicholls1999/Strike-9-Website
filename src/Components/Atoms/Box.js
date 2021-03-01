import React from 'react'
import styled from "styled-components";
import FadeIn from "./../../Animations/FadeIn";
const StyledBox = styled.div`
    position: relative;
    z-index: 2;
    background-color: ${({theme}) => theme.colors.primary.RoyalPurple};
    height: 70px;
    width: 70px;
    padding: 25px;
    text-align: center;
    margin-top: -30px;
    margin-left: 10px;
    box-shadow: 0px 6px 18px 0px ${({theme}) => theme.colors.primary.RoyalPurple};

    @media (min-width: ${({theme}) => theme.viewport.mediumDevices}){
        position: absolute;
        height: 75px;
        width: 75px;
        margin: 0 auto;
    }

`;

const StyledTitle = styled.h5`
    text-align: center;
    margin: 0 auto;
    font-size: 0.9rem;
    height: 2px;
    width: 15px;
    border-radius: 10px;
    box-shadow: 0 20px 0 0 rgb(255 255 255 / 30%)

`

function Box({headingTitle}) {
    return (
        <StyledBox>
            <FadeIn>
                    <StyledTitle>{headingTitle}</StyledTitle>
            </FadeIn>
        </StyledBox>


    )
}

export default Box
