import styled from "styled-components";
import theme from "../styles/theme";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";
import { StepConnector } from "@material-ui/core";
import FormStep from "../Components/Atoms/FormStep";

// Steps
import EventDetails from "../Components/Organisms/FormSteps/EventDetails";
import PersonalDetails from "../Components/Organisms/FormSteps/PersonalDetails";
import BillingAddress from "../Components/Organisms/FormSteps/BillingAddress";
import Summary from "../Components/Organisms/FormSteps/Summary";

import Select from "../Components/Atoms/Form/Select";
import TextArea from "../Components/Atoms/Form/TextArea";
import Input from "../Components/Atoms/Form/Input";
import Datepicker from "../Components/Atoms/Form/Datepicker";

const mobileRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const EventsDetailsSchema = Yup.object().shape({
    teamName: Yup.string().min(2, "A minimum of 2 characters!").required("Required!")
});

export const PersonalDetailsSchema = Yup.object().shape({
    firstName: Yup.string().min(2, "A minimum of 2 characters!").required("Required!"),
    lastName: Yup.string().min(2, "A minimum of 2 characters!").required("Required!"),
    email: Yup.string().min(2, "Must be valid email").required("Required!"),
    mobile: Yup.string().matches(mobileRegex, {message: "Please enter valid number!", excludeEmptyString: false}).required("Required!"),  
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

export const Strike9StepIconStyles = makeStyles({
    root: {
        color: theme.colors.primary[200],
        display: "flex",
        height: 22,
        alignItems: "center"
    },
    active: {
        color: theme.colors.primary[500],
        opacity: "100%"
    },
    completed: {
        color: theme.colors.primary[500],
        zIndex: 2,
        opacity: "100%"
    }
});

export const FormikConnector = withStyles({
    active: {
        "& $line": {
            borderColor: theme.colors.primary[500]
        }
    },
    completed: {
        "& $line": {
            borderColor: theme.colors.primary[500]
        }
    },
    line: {
        borderColor: theme.colors.primary[200],
        borderTopWidth: 3,
        width: "75%",
        borderRadius: 10,
        margin: "0 auto"
    }
})(StepConnector);

export const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

export function checkFormControlInputTypes(controls, props) {
    if(controls.dropDown) {
        return <Select form {...props} />
    } else if (controls.txtArea){
        return <TextArea {...props}/>
    } else if (controls.calendar){
        return <Datepicker {...props} />
    } else {
        return <Input {...props}/>
    }
}

export function isFormCompleted(booked) {
    if (booked === "Booked!") {
        return (
            <>
                <div className="p-2"></div>
                <h1 style={{color: theme.colors.primary[500], textAlign: "center"}}>Booking Successful</h1>
                <div className="p-2"></div>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut molestias suscipit sed quibusdam corrupti nostrum et ex illum saepe.</p>
                <div className="p-4"></div>
                <div className="p-4"></div>
                <div className="p-4"></div>
                <div className="p-4"></div>
            </>
        )
    }

    return <Summary eventDate="20th October 2020" />
}

export const renderSteps = (bookingContent, event) => {

    const steps = [
        {
            label: "Events Details",
            validationSchema: EventsDetailsSchema,
            component: <EventDetails eventDetails={{date: event.date, time: event.time, address: "Mosley School Sports Centre, Springfield Road, B13 9NP", cost: event.cost,}}/>
        },
        {
            label: "Personal Details",
            validationSchema: PersonalDetailsSchema,
            component: <PersonalDetails />
        },
        {
            label: "Billing Address",
            validationSchema: BillingAddressSchema,
            component: <BillingAddress />
        },
        {
            label: bookingContent.booked,
            component: isFormCompleted(bookingContent.booked)
        }
    ]


    return steps.map(({label, validationSchema, component}, index) => <FormStep key={index} validationSchema={validationSchema} label={label}>{component}</FormStep>)
}

export const handleBookEvent = (store, values) => {
    return new Promise((resolve, reject) => {
        console.log(values);
        store
            .collection("booking")
            .doc()
            .set(values)
            .then(() => resolve())
            .catch((err) => reject(err));
    });
}

export const handleUpdateEventSlots = (store, values) => {
    return new Promise((resolve, reject) => {
        console.log(values.slots, values.eventId);
        store
            .collection("events")
            .doc(values.eventId)
            .update({slots: values.slots})
            .then(() => resolve())
            .catch((err) => reject(err));
    });
}