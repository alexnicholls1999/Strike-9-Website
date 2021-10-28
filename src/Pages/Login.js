import React from 'react'
import AuthLayout from '../Layouts/AuthLayout';
import ContactForm from '../Components/Organisms/ContactForm';

function Login() {
    return (
        <AuthLayout
            authContent={{
                hero: {
                    title: "WELCOME BACK",
                    paragraph: "By clicking Log In you agree to our Terms and Conditions . Learn here how we process your data in our Privacy Policy and Cookies Policy."
                },
                component: <ContactForm contactForm={{title: "TEST"}}/>
            }}
        >
            
        </AuthLayout>
    )
}

export default Login
