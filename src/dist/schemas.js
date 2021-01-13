import * as Yup from "yup";

const MobileRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const EventsDetailsSchema = Yup.object().shape({
    teamName: Yup.string().min(2, "A minimum of 2 characters!").required("Required!")
});


export const PersonalDetailsSchema = Yup.object().shape({
    firstName: Yup.string().min(2, "A minimum of 2 characters!").required("Required!"),
    lastName: Yup.string().min(2, "A minimum of 2 characters!").required("Required!"),
    email: Yup.string().email("Must be a valid email").required("Required!"),
    mobile: Yup.string().matches(MobileRegex, {message: "Please enter valid number!", excludeEmptyString: false}).required("Required!"),
    gender: Yup.string().required("Required!"),
    selectedDate: Yup.string().required("Empty Fields!").nullable(),
    ethnicity: Yup.string().required("Required!")
});

export const BillingAddressSchema = Yup.object().shape({
    billingLine1: Yup.string().min(2, "A minimum of 2 characters!").required("Required!"),
    billingLine2: Yup.string().min(2, "A minimum of 2 characters!").required("Required!"),
    billingLine3: Yup.string().min(2, "A minimum of 2 characters!"),
    location: Yup.string().min(2, "A minimum of 2 characters!").required("Required!"),
    postcode: Yup.string().min(2, "A minimum of 2 characters!").max(5, "A maximum of 5 characters!").required("Required!")
})