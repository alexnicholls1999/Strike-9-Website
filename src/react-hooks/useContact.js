import { useFormik } from "formik";
import * as Yup from "yup";

export const ContactSchema = Yup.object().shape({
    email: Yup.string().min(2, "Must be valid email").required("Required!"),
    name: Yup.string().min(2, "Must be valid name").required("Required!"),
    message: Yup.string().min (2, "Must be valid name").required("Required!")
});

export default function useContact(onSubmit){
    const handleInnerSubmit = (data) => {onSubmit(data)}

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            message: ''
        },
        validationSchema: ContactSchema,
        onSubmit: data => {
            handleInnerSubmit(data);
        }
    })

    return {
        formik
    }

}