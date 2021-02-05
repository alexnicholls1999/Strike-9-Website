import React from 'react';
import SocialMediaIcon from '../Atoms/SocialMediaIcon';
import { faInstagram, faTwitter, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components"

const StyledSocialMedia = styled.div`
    color: ${({theme}) => theme.colors.neutral.White};
    
`;

function SocialMedia() {
    return (
        <StyledSocialMedia>
            <SocialMediaIcon socialmedia={faInstagram} />
            <SocialMediaIcon socialmedia={faTwitter} />
            <SocialMediaIcon socialmedia={faFacebookSquare} />
        </StyledSocialMedia>
    )
}

export default SocialMedia;
