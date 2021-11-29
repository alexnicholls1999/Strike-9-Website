import LoginTemplate from '../Components/Templates/LoginTemplate';

function Login({signInEmailUser}) {

    return (
        <LoginTemplate
            loginContent={{
                title: "WELCOME BACK",
                paragraph: "Log In"
            }}
            signInEmailUser={signInEmailUser}
        />
    )
}

export default Login
