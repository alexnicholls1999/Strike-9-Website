import * as Yup from "yup";

export const EventsDetailsSchema = Yup.object().shape({
    teamName: Yup.string().min(2, "A minium of 2 characters!").required("Empty Fields!")
});


export const PersonalDetailsSchema = Yup.object().shape({
    firstName: Yup.string().min(2, "A minium of 2 characters!").required("Empty Fields!"),
    lastName: Yup.string().min(2, "A minium of 2 characters!").required("Empty Fields!"),
    email: Yup.string().email("Must be a valid email").required("Empty Fields!"),
    mobile: Yup.string().matches(/^[6-9]\d{9}$/, {message: "Please enter valid number!", excludeEmptyString: false}).required("Empty Fields!"),
    gender: Yup.string().required("Empty Fields!"),
    selectDate: Yup.string().required("Empty Fields!").nullable(),
    ethnicity: Yup.string().required("Empty Fields!")
});

export const BillingAddressSchema = Yup.object().shape({
    billingLine1: Yup.string().min(2, "A minium of 2 characters!").required("Empty Fields!"),
    billingLine2: Yup.string().min(2, "A minium of 2 characters!").required("Empty Fields!"),
    billingLine3: Yup.string().min(2, "A minium of 2 characters!"),
    location: Yup.string().min(2, "A minium of 2 characters!").required("Empty Fields!"),
    postcode: Yup.string().min(2, "A minium of 2 characters!").required("Empty Fields!")
})