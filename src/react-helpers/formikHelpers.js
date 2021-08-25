import * as Yup from "yup";
import { StepConnector } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";


const MobileRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const isLastStep = (step, childrenArray) => {
    return step === childrenArray.length - 1;
}

export const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

export const FormikConnector = withStyles({
    active: {
        "& $line": {
            borderColor: "#6234D7"
        }
    }, 
    completed: {
        "& $line": {
            borderColor: "#6234D7"
        }
    },
    line: {
        borderColor: "#F1F1F1",
        borderTopWidth: 3,
        width: "75%",
        borderRadius: 10,
        margin: "0 auto"
    }
})(StepConnector);

export const EventsDetailsSchema = Yup.object().shape({
    teamName: Yup.string().min(2, "A minimum of 2 characters!").required("Required!")
});

export const PersonalDetailsSchema = Yup.object().shape({
    firstName: Yup.string().min(2, "A minimum of 2 characters!").required("Required!"),
    lastName: Yup.string().min(2, "A minimum of 2 characters!").required("Required!"),
    email: Yup.string().min(2, "Must be valid email").required("Required!"),
    mobile: Yup.string().matches(MobileRegex, {message: "Please enter valid number!", excludeEmptyString: false}).required("Required!"),  
    gender: Yup.string().required("Required!"),
    selectedDate: Yup.string().required("Empty Fields!").nullable(),
    ethnicity: Yup.string().required("Required!")
});

export const BillingAddressSchema = Yup.object().shape({
    billingAddressLine1: Yup.string().min(2, "A minimum of 2 characters!").required("Required!"),
    billingAddressLine2: Yup.string().min(2, "A minimum of 2 characters!").required("Required!"),
    billingAddressLine3: Yup.string().min(2, "A minimum of 2 characters!"),
    location: Yup.string().min(2, "A minimum of 2 characters!").required("Required!"),
    postcode: Yup.string().min(2, "A minimum of 2 characters!").max(7, "A maximum of 7 characters!").required("Required!")
});
