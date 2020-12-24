import React from 'react'
import styled from 'styled-components'

const Link = styled.a`

`;


const StyledSocialMedia = styled.div`

`;


function SocialMediaLink(props) {
    const {socialmedia, href} = props;

    return (
        <Link href={href}>
            <p>{socialmedia}</p>
        </Link>
    )
}

function SocialMedia() {
    return (
        <StyledSocialMedia>
            <SocialMediaLink href="#" socialmedia="insta"/>
            <SocialMediaLink href="#" socialmedia="facebook"/>
            <SocialMediaLink href="#" socialmedia="twitter"/>
        </StyledSocialMedia>
    )
}

export default SocialMedia;