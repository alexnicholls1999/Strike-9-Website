import { Navigate, Route } from 'react-router'

function RedirectToEvents({authenticated, children, initAttemptedRoute, ...props}) {
    return <Route {...props} render={({location}) => !authenticated ? (children) : <Navigate to={{pathname: initAttemptedRoute, state: { from: location}}}/>}/>
}

export default RedirectToEvents;
