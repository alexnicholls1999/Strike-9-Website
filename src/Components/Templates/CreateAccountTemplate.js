import PropTypes from "prop-types";
import AuthLayout from '../../Layouts/AuthLayout'
import CreateForm from "../Organisms/CreateForm";

function CreateAccountTemplate({createAccountContent}) {
    return <AuthLayout authContent={{ hero: { title: createAccountContent.title, paragraph: createAccountContent.paragraph}, component: <CreateForm title="or use your email for registration:"/>}}  />
}

CreateAccountTemplate.propTypes = {
    createAccountContent: PropTypes.shape({
        title: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired
    })
}

export default CreateAccountTemplate
