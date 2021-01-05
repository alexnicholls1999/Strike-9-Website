import React from 'react';
import {Container, Row, FormGroup} from 'react-bootstrap';
import styled from "styled-components";

import Input from "../../../Atoms/Form/Input";
import Label from "../../../Atoms/Form/Label";
import FormikStep from '../../../Atoms/Form/Step';

function BillingAddress(props) {
    const {label, billingLine1, billingLine2, billingLine3, location, postcode, onBillingLine1Change, onBillingLine2Change, onBillingLine3Change, onLocationChange, onPostcodeChange } = props;
    return (
        <FormikStep label={label}>
            
            <h3>Billing Address</h3>
            <div className="p-2"></div>
            
            <FormGroup>
                <Label>Billing Address Line 1</Label>
                <Input placeholder="Enter Billing Address Line 1" value={billingLine1} onChange={onBillingLine1Change} />
            </FormGroup>
            <FormGroup>
                <Label>Billing Address Line 2</Label>
                <Input placeholder="Enter Billing Address Line 2" value={billingLine2} onChange={onBillingLine2Change} />
            </FormGroup>
            <FormGroup>
                <Label>Billing Address Line 3</Label>
                <Input placeholder="Enter Billing Address Line 3" value={billingLine3} onChange={onBillingLine3Change} />
            </FormGroup>
            <FormGroup>
                <Label>Town/City</Label>
                <Input placeholder="Enter Town/City" value={location} onChange={onLocationChange} />
            </FormGroup>
            <FormGroup>
                <Label>Postcode</Label>
                <Input placeholder="Enter Postcode" value={postcode} onChange={onPostcodeChange} />
            </FormGroup>
        </FormikStep>
    )
}

export default BillingAddress
