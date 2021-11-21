import { useFormik } from "formik";
import * as Yup from "yup";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const CreateAccountSchema = Yup.object().shape({
    email: Yup.string().min(2, "Must be valid email").required("Required!"),
    password: Yup.mixed(passwordRegex,
        "Your password must have at least 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ).required("Required!"),
});

export default function useCreateAccount(onSubmit){
    const handleInnerSubmit = (data) => {onSubmit(data)}

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: CreateAccountSchema,
        onSubmit: data => {
            handleInnerSubmit(data);
        }
    })

    return {
        formik
    }
}