import React from 'react'
import { Redirect, Route } from 'react-router'

function Protected({ authenticated, children, initAttemptedRoute, ...props}) {
    return <Route {...props} render={({ location }) => authenticated ? (children) : (<Redirect to={{pathname: "/login", state: { from: location}}}/>) }/>
}

export default Protected
