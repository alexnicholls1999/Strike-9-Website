import React from 'react'
import styled from "styled-components";
import Box from '../Atoms/Box';
import Button from '../Atoms/Button';

const StyledIndexSection = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: center;
    position: relative;
    flex-direction: column;

    @media (min-width: ${({theme}) => theme.viewport.mediumDevices}){
        align-items: center;
        justify-content: center;
        position: relative;
        flex-direction: ${({alternate}) => (alternate ? "row-reverse" : "row")}
    }

`;

const StyledIndexImage = styled.div`
    width: 100%;

    img {
        width: 100%;
    }

    @media (min-width: ${({theme}) => theme.viewport.mediumDevices}){
        width: 50%;
    }
`
const StyledIndexText = styled.div`
    width: 100%;
    padding-left: 5%;
    padding-top: 10%;

    // h2 {
    //     font-size: clamp(10px, 4vw, 20px);
    // }

    
    p {
        font-size: clamp(13px, 1.5vw, 20px) !important;
        color: ${({theme}) => theme.colors.neutral.Black}
    }

    button {
        margin: 50px;
        width: 150px;
        float: right;
    }

    @media (min-width: ${({theme}) => theme.viewport.mediumDevices}){
        width: 50%;
        padding-top: 0;

        p {
            width: 75%;
        }
    }

`;

function IndexSection(props) {

    const {src, alt, headingTitle, title, message, text, alternate} = props;

    return (
        <StyledIndexSection alternate={alternate}>
            <StyledIndexImage>
                <img src={src} alt={alt}/>
            </StyledIndexImage>
            <Box headingTitle={headingTitle} />
            <StyledIndexText>
                <h2>{title}</h2>
                <p>{message}</p>
                <Button text={text}/>
            </StyledIndexText>
        </StyledIndexSection>
    )
}

export default IndexSection
