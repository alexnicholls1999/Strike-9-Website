import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledSocialMediaIcon = styled.div`
    height: 3rem;
    width: 3rem;
    margin: 0 0.05rem;

    text-align: center;

    svg {
        height: 100%;
        font-size: 2rem;
        color: ${({theme}) => theme.colors.neutral[200]};
    }
`;

function SocialMediaIcon({socialMedia}) {

    const handleOnClickLink = () => {
        window.open(`${socialMedia.path}`, '_blank');
    }

    return (
        <StyledSocialMediaIcon>
            <FontAwesomeIcon onClick={handleOnClickLink} className="fab" icon={socialMedia.icon} />
        </StyledSocialMediaIcon>
    )
}

SocialMediaIcon.propTypes = {
    auth: PropTypes.shape({
        handleAuthClick: PropTypes.func
    }),
    socialMedia: PropTypes.shape({
      path: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired  
    })
}

export default SocialMediaIcon
