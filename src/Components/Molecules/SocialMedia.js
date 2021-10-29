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
    color: ${({ theme }) => theme.colors.primary[500]};
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (min-width: 768px) {
        justify-content: center;
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
                    {socialMedia.map(({path, icon}) => <SocialMediaIcon auth={auth} socialMedia={{icon: icon}}/>)}
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
