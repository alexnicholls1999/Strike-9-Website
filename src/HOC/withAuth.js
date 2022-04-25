import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../firebase/useAuth";

const withAuth = (Child) => {
    const Component = ({...props}) => {
        const { useAuthContext } = useAuth();
        const { isAuthenticated } = useAuthContext();
        const navigate = useNavigate();
        const location = useLocation();

        useEffect(() => {
            if (location.pathname === "/events") {
                !isAuthenticated && navigate("/login");
            }
    
            if (isAuthenticated) {
                navigate("/");
            }
    
            console.log(isAuthenticated)
    
        }, [location, isAuthenticated])

        return <Child {...props}/>
    }

    return Component;
}

export default withAuth;