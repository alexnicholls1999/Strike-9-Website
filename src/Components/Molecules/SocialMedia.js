import React from 'react'
import styled from 'styled-components'
import {faInstagram, faTwitter, faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import SocialMediaLink from '../Atoms/SocialMediaIcon'


const StyledSocialMedia = styled.div`

`;

function SocialMedia() {
    return (
        <StyledSocialMedia>
            <SocialMediaLink href="#" socialmedia={faInstagram}/>
            <SocialMediaLink href="#" socialmedia={faTwitter}/>
            <SocialMediaLink href="#" socialmedia={faFacebookSquare}/>
        </StyledSocialMedia>
    )
}

export default SocialMedia;