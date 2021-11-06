import { useFormik } from "formik";

export default function useCreateAccount(onSubmit){
    const handleInnerSubmit = (data) => {onSubmit(data)}

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: data => {
            handleInnerSubmit(data);
        }
    })

    return {
        formik
    }
}