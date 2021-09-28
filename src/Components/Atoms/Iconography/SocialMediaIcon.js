import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SocialMediaIcon({path, socialMedia}) {

    const handleOnClickLink = () => {
        window.open(`${path}`, '_blank');
    }

    return <FontAwesomeIcon onClick={handleOnClickLink} className="fab px-2" size="3x" icon={socialMedia}/>
}

export default SocialMediaIcon
