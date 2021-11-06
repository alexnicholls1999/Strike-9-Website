import { useState } from "react";

export default function useAuth(firebaseAuth) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [ user, setUser ] = useState([]);

    // const googleProvider = new firebaseAuth.GoogleAuthProvider();
    // const facebookProvider = new firebaseAuth.FacebookAuthProvider();
    // const twitterProvider = new firebaseAuth.TwitterAuthProvider();

    firebaseAuth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            setIsAuthenticated(true);
            setUser(firebaseUser);
            return;
        }

        setIsAuthenticated(false)
    });

    const createEmailUser = (email, password) => 
        firebaseAuth().createUserWithEmailAndPassword(email, password);

    const signInEmailUser = (email, password) => 
        firebaseAuth().signInEmailUser(email, password);

    // const signInWithThirdPartyProvider = (provider) => {
    //     switch (provider) {
    //         case "google":
    //             firebaseAuth().signInWithRedirect(googleProvider);
    //         case "facebook": 
    //             firebaseAuth().signInWithRedirect(facebookProvider);
    //         case "twitter": 
    //             firebaseAuth().signInWithRedirect(twitterProvider);
    //         default:
    //             throw new Error("unsupported provider!")
    //     }
    // } 

    const signOut = () => firebaseAuth().signOut();

    return {
        isAuthenticated,
        user,
        createEmailUser,
        signInEmailUser,
        signOut
    }
}