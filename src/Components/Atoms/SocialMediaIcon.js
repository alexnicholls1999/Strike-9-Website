import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const Link = styled.a`
    color: white
`;

function SocialMediaIcon(props) {
    const {socialmedia, href} = props;

    return (
        <Link href={href}>
            <FontAwesomeIcon className="fab px-2" size="3x" icon={socialmedia} />
        </Link>
    )
}

export default SocialMediaIcon;
