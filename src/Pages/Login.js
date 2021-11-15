import LoginTemplate from '../Components/Templates/LoginTemplate';

function Login({signInEmailUser}) {

    return (
        <LoginTemplate
            loginContent={{
                title: "WELCOME BACK",
                paragraph: "By clicking Log In you agree to our Terms and Conditions. Learn here how we process your data in our Privacy Policy and Cookies Policy.",
                signInEmailUser: signInEmailUser
            }}
        />
    )
}

export default Login
