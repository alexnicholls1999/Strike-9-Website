import { Redirect, Route } from 'react-router'

function RedirectToLogin({authenticated, children, initAttemptedRoute, ...props}) {
    return <Route {...props} render={({location}) => !authenticated ? (children) : <Redirect to={{pathname: initAttemptedRoute, state: { from: location}}}/>}/>
}

export default RedirectToLogin;
