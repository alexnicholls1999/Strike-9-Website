import React from 'react';
import SocialMediaIcon from '../Atoms/SocialMediaIcon';
import { faInstagram, faTwitter, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";


function SocialMedia() {
    return (
        <StyledSocialMedia>
            <SocialMediaIcon href="#" socialmedia={faInstagram} />
            <SocialMediaIcon href="#" socialmedia={faTwitter} />
            <SocialMediaIcon href="#" socialmedia={faFacebookSquare} />
        </StyledSocialMedia>
    )
}

export default SocialMedia
