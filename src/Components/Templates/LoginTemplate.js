import { useState } from "react";
import PropTypes from "prop-types";
import AuthLayout from '../../Layouts/AuthLayout';
import LoginForm from "../Organisms/LoginForm";

function LoginTemplate({loginContent}) {

    const [error, setError] = useState();

    const handleSubmit = async (data) => {
        const {email, password} = data;

        console.log(data);

        try {
            await loginContent.signInEmailUser(email, password);
        } catch (error) {
            setError(error.message);
        }
    }

    const login = {
        title: "or use your email to login:",
        onSubmit: handleSubmit,
        serverErr: error
    }


    return <AuthLayout authContent={{ hero: { title: loginContent.title, paragraph: loginContent.paragraph}, component: <LoginForm login={login}/>}}  />
}

LoginTemplate.propTypes = {
    loginContent: PropTypes.shape({
        title: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired
    })
}

export default LoginTemplate

