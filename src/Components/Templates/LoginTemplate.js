import { useState } from "react";
import PropTypes from "prop-types";
import AuthLayout from '../../Layouts/AuthLayout';
import LoginForm from "../Organisms/LoginForm";

function LoginTemplate({loginContent, signInEmailUser}) {

    const [error, setError] = useState();

    const handleSubmit = async data => {
        const { email, password } = data;

        console.log(data);

        try {
            await signInEmailUser(email, password);
        } catch (error) {
            setError(error.message);
        }
    }

    return <AuthLayout authContent={{ hero: { title: loginContent.title, paragraph: loginContent.paragraph}, component: <LoginForm title="or use your email for signing in:" serverError={error} onSubmit={handleSubmit}/>}}  />
}

LoginTemplate.propTypes = {
    loginContent: PropTypes.shape({
        title: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired
    })
}

export default LoginTemplate

