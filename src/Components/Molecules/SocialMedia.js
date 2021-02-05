import React from 'react';
import SocialMediaIcon from '../Atoms/SocialMediaIcon';
import { faInstagram, faTwitter, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
<<<<<<< HEAD
import styled from "styled-components";

const StyledSocialMedia = styled.div`
    color: ${({theme}) => theme.colors.neutral.White};

=======
import styled from "styled-components"

const StyledSocialMedia = styled.div`
    color: ${({theme}) => theme.colors.neutral.White};
    
>>>>>>> 3b0bcafff5df06b9dfbfbe01f164ea7a678f9b14
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
