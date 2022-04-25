import React from 'react'
import { Navigate, Route } from 'react-router'

function Protected({ authenticated, children, initAttemptedRoute, ...props}) {
    return <Route {...props} render={({ location }) => authenticated ? (children) : (<Navigate to={{pathname: "/login", state: { from: location}}}/>) }/>
}

export default Protected
