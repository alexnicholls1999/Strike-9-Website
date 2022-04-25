import { useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword , signOut} from 'firebase/auth';
import { auth } from "./utils";
import { useLocation, useNavigate } from "react-router";
import { FirebaseAuthContext } from "./FirebaseAuthProvider";

export default function useAuth() {
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const [user, setUser] = useState([]);
    
    // onAuthStateChanged(auth, fbUser => {
    //     if (fbUser) {
    //         setIsAuthenticated(true);
    //         setUser(fbUser);
    //         console.log(user);
    //         return;
    //     }
    //     setIsAuthenticated(false);
    // })

    const useAuthContext = () => useContext(FirebaseAuthContext);

    const signInEmailUser = (email, password) => 
        signInWithEmailAndPassword(auth, email, password);
    
    const createEmailUser = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);
    
    const logOut = () => signOut(auth);

    return {
        useAuthContext,
        createEmailUser,
        signInEmailUser,
        logOut
    }
}