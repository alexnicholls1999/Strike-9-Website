import React from 'react';
import SocialMediaIcon from '../Atoms/SocialMediaIcon';
import { faInstagram, faTwitterSquare, faFacebookSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components"

const StyledSocialMedia = styled.div`
    // color: ${({theme}) => theme.colors.neutral.White};
    color: white;
`;

function SocialMedia() {
    return (
        <StyledSocialMedia>
            <SocialMediaIcon socialmedia={faTwitterSquare} />
            <SocialMediaIcon socialmedia={faFacebookSquare} />
            <SocialMediaIcon socialmedia={faInstagram} />
            <SocialMediaIcon socialmedia={faLinkedin} />
        </StyledSocialMedia>
    )
}

export default SocialMedia;
