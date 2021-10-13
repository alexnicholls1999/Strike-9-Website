import { faFacebookSquare, faInstagram, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components"
import SocialMediaIcon from "../Atoms/Iconography/SocialMediaIcon"

const socialMedia = [
    {
        path: "https://twitter.com/Strike9Training",
        icon: faTwitterSquare
    },
    {
        path: "https://facebook.com/strike9training",
        icon: faFacebookSquare
    },
    {
        path: "https://instagram.com/strike9t",
        icon: faInstagram
    }
]

const StyledSocialMedia = styled.div`
    color: ${({theme}) => theme.colors.neutral[100]};
    cursor: pointer;
    
    > * {
       padding: .85rem 0;
    }
`;

function SocialMedia() {
    return (
        <StyledSocialMedia>
            {socialMedia.map(({path, icon}) => <SocialMediaIcon socialMedia={{path: path, icon: icon}}/>)}
        </StyledSocialMedia>
    )
}

export default SocialMedia
