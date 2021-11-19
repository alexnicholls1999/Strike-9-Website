import theme from "../styles/theme";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";
import { StepConnector } from "@material-ui/core";
import FormStep from "../Components/Atoms/FormStep";

// Steps
import EventDetails from "../Components/Organisms/FormSteps/EventDetails";
import PersonalDetails from "../Components/Organisms/FormSteps/PersonalDetails";
import BillingAddress from "../Components/Organisms/FormSteps/BillingAddress";
import Summary from "../Components/Organisms/FormSteps/Summary";

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
            component: <EventDetails eventDetails={{date: event.date, time: event.time, address: "Mosley School Sports Centre, Springfield Road, B13 9NP", cost: event.cost,}}/>
        },
        {
            label: "Personal Details"
        },
        {
            label: "Billing Address",
            component: <BillingAddress />
        },
        {
            label: bookingContent.booked,
            component: isFormCompleted(bookingContent.booked)
        }
    ]


    return steps.map(({label, component}, index) => <FormStep key={index} label={label}>{component}</FormStep>)
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

export const handleUpdateEventSlots = (store, slots) => {
    return new Promise((resolve, reject) => {
        console.log(slots);
        store
            .collection("events")
            .doc()
            .set(slots)
            .then(() => resolve())
            .catch((err) => reject(err));
    });
}