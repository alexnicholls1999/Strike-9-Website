import React from 'react'
import Strike9Logo from '../../assets/Strike-9-Light-Logo.png' 

function Logo(props) {
    return (
        <>
            <img style={props.style} src={Strike9Logo}/>
        </>
    )
}

export default Logo;
