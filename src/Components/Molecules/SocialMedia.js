import styled from "styled-components";
import { faInstagram, faTwitterSquare, faFacebookSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SocialMediaIcon from "../Atoms/Iconography/SocialMediaIcon";

const StyledSocialMedia = styled.div`
    color: ${({theme}) => theme.colors.neutral.White};
`;

function SocialMedia() {
    return (
        <StyledSocialMedia>
            <SocialMediaIcon path="https://twitter.com/Strike9Training" socialMedia={faTwitterSquare}/>
            <SocialMediaIcon path="https://www.facebook.com/strike9training" socialMedia={faFacebookSquare}/>
            <SocialMediaIcon path="https://www.instagram.com/strike9t/?hl=en" socialMedia={faInstagram}/>
        </StyledSocialMedia>
    )
}

export default SocialMedia
