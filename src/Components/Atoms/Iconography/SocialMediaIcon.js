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

    
    ${({ auth }) => auth && css`
        margin: 0 .5rem;
        border-radius: 10rem;
        border: 1px solid ${({theme}) => theme.colors.neutral[300]};
        cursor: pointer;

        &:hover {
            border: 2px solid ${({theme}) => theme.colors.primary[500]};
            transition: 300ms ease-in-out;  
        }

        svg { 
            font-size: 1rem;
            color: ${({theme}) => theme.colors.primary[500]};
        }
    `}

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
