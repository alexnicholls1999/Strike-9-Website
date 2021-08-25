import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function SocialMediaIcon({path, socialMedia}) {

    const handleOnClickLink = () => {
        window.open(`${path}`, '_blank');
    }

    return (
        <FontAwesomeIcon onClick={handleOnClickLink} className="fab px-2" size="3x" icon={socialMedia} />
    )
}

SocialMediaIcon.propTypes = {
    path: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired
}

export default SocialMediaIcon
