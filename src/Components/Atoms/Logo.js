import React from 'react'
import Strike9Logo from '../../assets/Strike-9-Light-Logo.png';
import {Link} from "react-router-dom";

function Logo(props) {
    return (
        <Link to="/">
            <img style={props.style} src={Strike9Logo}/>
        </Link>
    )
}

export default Logo;
