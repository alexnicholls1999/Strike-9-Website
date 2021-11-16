import React from 'react'
import CreateAccountTemplate from '../Components/Templates/CreateAccountTemplate'

function CreateAccount({createEmailUser}) {
    return <CreateAccountTemplate createEmailUser={createEmailUser} createAccountContent={{title: "CREATE ACCOUNT", paragraph: "By clicking Create Account you agree to our Terms and Conditions. Learn here how we process your data in our Privacy Policy and Cookies Policy."}} />
}

export default CreateAccount
