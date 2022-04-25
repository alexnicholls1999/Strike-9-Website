import { createContext, useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils";
import useAuth from "./useAuth";

export const FirebaseAuthContext = createContext(null);

function FirebaseAuthProvider({children}) {
    const { createEmailUser, signInEmailUser, logOut } = useAuth();
    const [user, setUser] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    onAuthStateChanged(auth, fbUser => {
        if (fbUser) {
            setIsAuthenticated(true);
            setUser(fbUser);
            console.log(user);
            console.log(isAuthenticated);
            return;
        }
        setIsAuthenticated(false);
    })

  return (
      <FirebaseAuthContext.Provider value={{ user, isAuthenticated, createEmailUser, signInEmailUser, logOut}}>{children}</FirebaseAuthContext.Provider>
  )
}

export default FirebaseAuthProvider;