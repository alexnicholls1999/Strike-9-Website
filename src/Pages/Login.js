import { useContext } from 'react';
import LoginTemplate from '../Components/Templates/LoginTemplate';
import useAuth from "../react-hooks/useAuth";
import { FirebaseContext } from '../utils/Context/FirebaseContext';
import firebase, { auth } from "./../firebase/utils";

function Login() {
    const { signInEmailUser } = useAuth(firebase.auth); 
    console.log(auth);


    return (
        <LoginTemplate
            loginContent={{
                title: "WELCOME BACK",
                paragraph: "By clicking Log In you agree to our Terms and Conditions . Learn here how we process your data in our Privacy Policy and Cookies Policy."
            }}
        />
    )
}

export default Login
