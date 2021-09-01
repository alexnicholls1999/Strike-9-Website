import { useState } from "react";

export default function useAuth(firebaseAuth){
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    const [ user, setUser ] = useState([]);

    firebaseAuth().onAuthStateChanged((fbUser) => {
        if (fbUser) {
            setIsAuthenticated(true);
            setUser(fbUser);
            return;
        }

        setIsAuthenticated(false);
    });

    const signInAnomousUser = () => firebaseAuth().signInAnonymously();

    const signOut = () => firebaseAuth().signOut();

    return {
        user,
        isAuthenticated,
        signInAnomousUser,
        signOut
    };
}