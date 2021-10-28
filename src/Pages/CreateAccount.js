import React from 'react'
import AuthLayout from '../Layouts/AuthLayout'

function CreateAccount() {
    return (
        <AuthLayout
            authContent={{
                hero: {
                    title: "CREATE ACCOUNT",
                    paragraph: "By clicking Create Account you agree to our Terms and Conditions. Learn here how we process your data in our Privacy Policy and Cookies Policy."
                }
            }}
        />
    )
}

export default CreateAccount
