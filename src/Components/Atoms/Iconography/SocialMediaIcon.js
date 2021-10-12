import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function SocialMediaIcon({socialMedia}) {

    const handleOnClickLink = () => {
        window.open(`${socialMedia.path}`, '_blank');
    }

    return <FontAwesomeIcon onClick={handleOnClickLink} className="fab" size="3x"  icon={socialMedia.icon} />
}

SocialMediaIcon.propTypes = {
    socialMedia: PropTypes.shape({
      path: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired  
    })
}

export default SocialMediaIcon
