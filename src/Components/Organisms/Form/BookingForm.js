import React, { useEffect, useState } from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import FormikStep from '../../Atoms/Forms/Step';
import FormikStepper from '../../Molecules/Form/Stepper';
import EventDetails from './Steps/EventDetails';
import PersonalDetails from './Steps/PersonalDetails';
import BillingAddress from './Steps/BillingAddress';
import Summary from './Steps/Summary';
import useBookEvent from '../../../react-hooks/useBookEvent';
import Confirmation from './Steps/Confirmation';
import useAuth from '../../../firebase/useAuth';
import firebase from '../../../firebase/utils';

function BookingForm({ id, event, auth }) {

    const { handleSubmit, setBooked, booked } = useBookEvent();

    const { user, signInAnomousUser } = useAuth(firebase.auth);

    if (event) {
        return (
            <FormikStepper
                initialValues={{
                    eventId: id,
                    authId: user.l,
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
                    postcode: "",
                    checked: false
                }}
                onSubmit={async (values) => {
                    console.log(values);
                    signInAnomousUser();
                }}
            > 
                <FormikStep label="Events Details" 
                // validationSchema={EventsDetailsSchema} 
                >
                    <EventDetails 
                        date={event.date}
                        time={event.time}
                        address="Mosley School Sports Centre, Springfield Road, B13 9NP"
                        cost={event.cost}
                    />
                </FormikStep>
                
                <FormikStep label="Personal Details" 
                // validationSchema={PersonalDetailsSchema}
                >
                    <PersonalDetails />
                </FormikStep>
                
                <FormikStep label="Billing Address" 
                // validationSchema={BillingAddressSchema}
                >
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
            <p>Loading Events...</p>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    const id = ownProps.params.id;
    const events = state.firestore.data.events;
    const event = events ? events[id] : null;

    return {
        id: id,
        event: event,
        auth: state.firebase.auth
    }
}

export default compose(connect(mapStateToProps), firestoreConnect([{ collection: "events" }]))(BookingForm);