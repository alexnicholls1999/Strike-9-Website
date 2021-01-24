import React, {useState} from 'react';
import { connect} from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import { db } from '../../../firebase/utils';
import { EventsDetailsSchema, PersonalDetailsSchema, BillingAddressSchema } from '../../../dist/schemas';

import EventsDetails from './Steps/EventDetails';
import FormikStepper from '../../Molecules/Form/Stepper';
import PersonalDetails from './Steps/PersonalDetails';
import BillingAddress from './Steps/BillingAddress';
import Summary from './Steps/Summary';
import Confirmation from './Steps/Confirmation';
import FormikStep from '../../Atoms/Form/Step';

function Form(props) {
    const {id, event, auth} = props;

    // Form Values
    const [teamName, setTeamName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [gender, setGender] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [ethnicity, setEthnicity] = useState("");
    const [billingLine1, setBillingLine1] = useState("");
    const [billingLine2, setBillingLine2] = useState("");
    const [billingLine3, setBillingLine3] = useState("");
    const [location, setLocation] = useState("");
    const [postcode, setPostcode] = useState("");

    // Booked Value
    const [booked, setBooked] = useState("Summary");

    console.log(event);


    const handleSubmit = (values) => {
        setBooked("Booked!");
        db.collection("booking")
            .add({
                eventId: values.eventId,
                uid: values.uid,
                teamName: values.teamName,
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                mobile: values.mobile,
                gender: values.gender,
                selectedDate: new Date(values.selectedDate).toDateString(),
                ethnicity: values.ethnicity,
                billingLine1: values.billingLine1,
                billingLine2: values.billingLine2,
                billingLine3: values.billingLine3,
                location: values.location,
                postcode: values.postcode
            })
            .catch((err) => {
                console.log(err)
            });

        db.collection("events").doc(id).update({
            slots: values.slots
        })
        .catch((err) => {
            console.log(err)
        });
    }

    if (event) {
        return (
            <FormikStepper
                initialValues={{
                    eventId: id,
                    uid: auth.uid,
                    slots: event.slots - 1,
                    teamName: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    mobile: "",
                    gender: "",
                    selectedDate: "",
                    ethnicity: "",
                    billingLine1: "",
                    billingLine2: "",
                    billingLine3: "",
                    location: "",
                    postcode: ""
                }}
                onSubmit={async (values) => {
                    setBooked("Booked!");
                    console.log("Successful Submit", values); 
                    handleSubmit(values);
                }}
            >
            
                <FormikStep label="Events Details" validationSchema={EventsDetailsSchema}>
                    <EventsDetails date={event.date} time={event.time} cost={event.cost}/>
                </FormikStep>
    
                <FormikStep label="Personal Details"  validationSchema={PersonalDetailsSchema}>
                    <PersonalDetails />
                </FormikStep>
    
                <FormikStep label="Billing Address" validationSchema={BillingAddressSchema}>
                    <BillingAddress />
                </FormikStep>
    
    
                { booked === "Booked!" ? (
                    <Confirmation label={booked}/>
                ) : (
                    <FormikStep label={booked}>
                        <Summary />
                    </FormikStep>
                )}
    
    
            </FormikStepper>
        ) 
    } else {
        return (
            <p>Loading Events ...</p>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id;
    const events = state.firestore.data.events;
    const event = events ? events[id] : null;

    return {
        id: id,
        event: event,
        auth: state.firebase.auth
    }
}

export default compose(connect(mapStateToProps), firestoreConnect([{ collection: "events" }]))(Form);