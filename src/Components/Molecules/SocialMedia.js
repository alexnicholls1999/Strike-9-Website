import { faFacebookF, faFacebookSquare, faGoogle, faInstagram, faTwitter, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components"
import SocialMediaIcon from "../Atoms/Iconography/SocialMediaIcon"

const socialMedia = [
    {
        path: "https://twitter.com/Strike9Training",
        icon: faTwitter
    },
    {
        path: "https://facebook.com/strike9training",
        icon: faFacebookF
    },
    {
        path: "https://instagram.com/strike9t",
        icon: faGoogle
    }
]

const StyledSocialMediaAuth = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    color: ${({theme}) => theme.colors.primary[500]};

    > * {
        width: auto !important;
        padding: .85rem;
        border: 2px solid ${({theme}) => theme.colors.primary[500]};
        border-radius: 100%;
     }
`;

const StyledSocialMedia = styled.div`
    cursor: pointer;
    
    > * {
       padding: .85rem 0;
    }
`;

function SocialMedia({auth}) {
    return (
        <>
            {auth ? (
                <StyledSocialMediaAuth>
                    {socialMedia.map(({path, icon}) => <SocialMediaIcon socialMedia={{icon: icon}}/>)}
                </StyledSocialMediaAuth>
            ) : (
                <StyledSocialMedia>
                    {socialMedia.map(({path, icon}) => <SocialMediaIcon socialMedia={{path: path, icon: icon}}/>)}
                </StyledSocialMedia>
            )}
        </>

    )
}

export default SocialMedia
