import styled from "styled-components";
import { faInstagram, faTwitterSquare, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import SocialMediaIcon from "../Atoms/Iconography/SocialMediaIcon";

const StyledSocialMedia = styled.div`
    color: ${({theme}) => theme.colors.neutral.White};
`;

const socialMedia = [
    {
        path: "https://twitter.com/Strike9Training",
        socialMedia: faTwitterSquare,
    },
    {
        path: "https://www.facebook.com/strike9training",
        socialMedia: faFacebookSquare,
    },
    {
        path: "https://www.instagram.com/strike9t/?hl=en",
        socialMedia: faInstagram,
    }
]

function SocialMedia() {
    return (
        <StyledSocialMedia>
            {socialMedia.map(({path, socialMedia}) => { 
                return <SocialMediaIcon path={path} socialMedia={socialMedia}/>
            })}
        </StyledSocialMedia>
    )
}
 
export default SocialMedia;
