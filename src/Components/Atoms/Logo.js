import React from 'react'
import { Link } from 'react-router-dom'
// import { Strike9Logo } from "../../assets/Strike-9-Light-Logo.svg"

function Logo() {
    return (
        <Link path="/">
            <img  alt="strike-9-logo"/>
        </Link>
    )
}

export default Logo;
