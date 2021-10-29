import PropTypes from "prop-types";
import AuthLayout from '../../Layouts/AuthLayout';
import LoginForm from "../Organisms/LoginForm";

function LoginTemplate({loginContent}) {
    return <AuthLayout authContent={{ hero: { title: loginContent.title, paragraph: loginContent.paragraph}, component: <LoginForm title="or use your email to login:"/>}}  />
}

LoginTemplate.propTypes = {
    loginContent: PropTypes.shape({
        title: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired
    })
}

export default LoginTemplate

