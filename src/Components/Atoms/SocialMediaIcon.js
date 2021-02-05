import React from 'react';
import Link from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function SocialMediaIcon({path, socialmedia}) {
    return (
        <FontAwesomeIcon className="fab px-2" size="3x" icon={socialmedia} />
    )
}

export default SocialMediaIcon;
