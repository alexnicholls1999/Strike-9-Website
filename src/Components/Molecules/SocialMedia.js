import { faFacebookF, faFacebookSquare, faGoogle, faInstagram, faTwitter, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
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

const socialMediaAuth = [
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

const StyledSocialMedia = styled.div`
    color: ${({ theme }) => theme.colors.primary[500]};
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media (min-width: 768px) {
        justify-content: center;
    }

`;

function SocialMedia({auth}) {
    return (
        <>
            <StyledSocialMedia>
                {auth ? (
                    <>{socialMediaAuth.map(({path, icon}) => <SocialMediaIcon auth={auth} socialMedia={{path: path, icon: icon}}/>)}</>
                ) : (
                    <>{socialMedia.map(({path, icon}) => <SocialMediaIcon auth={auth} socialMedia={{path: path, icon: icon}}/>)}</>
                )}
                
            </StyledSocialMedia>
        </>

    )
}

export default SocialMedia
