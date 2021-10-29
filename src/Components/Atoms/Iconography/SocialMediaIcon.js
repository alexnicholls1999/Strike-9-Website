import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledSocialMediaIcon = styled.div`
    height: 3rem;
    width: 3rem;
    margin: 0 10px;
    border-radius: 10rem;
    border: 1px solid ${({theme}) => theme.colors.neutral[300]};
    text-align: center;

    &:hover {
        border: 2px solid ${({theme}) => theme.colors.primary[500]};
        transition: 300ms ease-in-out;  
    }

    svg {
        height: 100%;
        font-size: ${({auth}) => auth ? "1rem" : "2rem"};
        color: ${({auth, theme}) => auth ? theme.colors.primary[500] : theme.colors.neutral[200]};
    }

`;

function SocialMediaIcon({auth, socialMedia}) {

    const handleOnClickLink = () => {
        window.open(`${socialMedia.path}`, '_blank');
    }

    return (
        <StyledSocialMediaIcon auth={auth}>
            <FontAwesomeIcon onClick={auth ? auth.handleAuthClick : handleOnClickLink} className="fab" icon={socialMedia.icon} />
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
