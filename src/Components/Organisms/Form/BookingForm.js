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
import useBookEvent from '../../../hooks/useBookEvent';

function Form(props) {
    const {id, event, auth} = props;

    const { handleSubmit, setBooked, booked} = useBookEvent();

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
                    setBooked("Booked!")
                    handleSubmit(values);
                }}
            >
            
                <FormikStep label="Events Details">
                    <EventsDetails date={event.date} time={event.time} cost={event.cost}/>
                </FormikStep>
    
                <FormikStep label="Personal Details">
                    <PersonalDetails />
                </FormikStep>
    
                <FormikStep label="Billing Address">
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
    const id = ownProps.params.id;

    console.log(id);
    const events = state.firestore.data.events;
    const event = events ? events[id] : null;

    return {
        id: id,
        event: event,
        auth: state.firebase.auth
    }
}

export default compose(connect(mapStateToProps), firestoreConnect([{ collection: "events" }]))(Form);