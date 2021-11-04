import theme from "../styles/theme";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";
import { StepConnector } from "@material-ui/core";
import * as Steps from "./../Components/Organisms/FormSteps";
import FormStep from "../Components/Atoms/FormStep";
import FormStepper from "../Components/Organisms/FormStepper";

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

export function isFormCompleted(booked) {
    if (booked === "Booked!") {
        return (
            <>
                <h1 style={{color: theme.colors.primary[500], textAlign: "center"}}>Booking Successful</h1>
                <div className="p-2"></div>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut molestias suscipit sed quibusdam corrupti nostrum et ex illum saepe.</p>
            </>
        )
    }

    return <Steps.Summary eventDate="20th October 2020" />
}

export const renderSteps = (bookingContent, event) => {

    console.log(event);

    const steps = [
        {
            label: "Events Details",
            component: <Steps.EventDetails eventDetails={{date: event.date, time: event.time, address: "Mosley School Sports Centre, Springfield Road, B13 9NP", cost: event.cost,}}/>
        },
        {
            label: "Personal Details"
        },
        {
            label: "Billing Address",
            component: <Steps.BillingAddress />
        },
        {
            label: bookingContent.booked,
            component: isFormCompleted(bookingContent.booked)
        }
    ]


    return steps.map(({label, component}, index) => <FormStep key={index} label={label}>{component}</FormStep>)
}