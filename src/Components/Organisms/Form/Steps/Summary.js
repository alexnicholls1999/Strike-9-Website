import React from 'react'
import FormikStep from '../../../Atoms/Form/Step';

function Summary(props) {

    const { label, teamName, firstName, lastName, email, mobile, gender, selectedDate, ethnicity, billingLine1, billingLine2, billingLine3, location, postcode } = props;

    return (
    
        <FormikStep label={label}>
            <div className="summary">

                <h3>Summary</h3>
                <div className="p-2"></div>
                
                <div className="step-group">
                    <label>Event Details</label>
                    <p>27th October 2020</p>
                    <p>{teamName}</p>
                </div> 

                <div className="step-group">
                    <label>Personal Details</label>
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                    <p>{email}</p>
                    <p>{mobile}</p>
                    <p>{gender}</p>
                    <p>{selectedDate}</p>
                    <p>{ethnicity}</p>
                </div>                
                <div className="step-group">
                    <label>Billing Address</label>
                    <p>{billingLine1}</p>
                    <p>{billingLine2}</p>
                    <p>{billingLine3}</p>
                    <p>{location}</p>
                    <p>{postcode}</p>
                </div>
            </div>
        </FormikStep>

    )
}

export default Summary
