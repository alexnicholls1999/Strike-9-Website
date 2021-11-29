import { useState } from "react";
import PropTypes from "prop-types";
import AuthLayout from '../../Layouts/AuthLayout'
import CreateForm from "../Organisms/CreateForm";

function CreateAccountTemplate({createAccountContent, createEmailUser}) {

    const [error, setError] = useState();

    const handleSubmit = async data => {
        const { email, password } = data;

        console.log(data);

        try {
            await createEmailUser(email, password);
        } catch (error) {
            setError(error.message);
        }
    }

    return <AuthLayout authContent={{ hero: { title: createAccountContent.title, paragraph: createAccountContent.paragraph}, component: <CreateForm onSubmit={handleSubmit} serverError={error}/>}}  />
}

CreateAccountTemplate.propTypes = {
    createAccountContent: PropTypes.shape({
        title: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired
    })
}

export default CreateAccountTemplate
