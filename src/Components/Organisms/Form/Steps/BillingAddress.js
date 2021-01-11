import { useFormikContext } from 'formik';
import React from 'react';
import {Container, Row, FormGroup} from 'react-bootstrap';
import styled from "styled-components";


import Input from "../../../Atoms/Form/Input";
import Label from "../../../Atoms/Form/Label";
import FormikStep from '../../../Atoms/Form/Step';
import ErrorMessage from '../../../Atoms/Form/ErrorMessage';

const Title = styled.h3 `
    color: ${({theme}) => theme.colors.primary.RoyalPurple};
    font-weight: bold;
`;

function BillingAddress(props) {
    const formik = useFormikContext();
    const {label, billingLine1, billingLine2, billingLine3, location, postcode, onBillingLine1Change, onBillingLine2Change, onBillingLine3Change, onLocationChange, onPostcodeChange } = props;
    return (
        <FormikStep label={label}>
            
            <Title>Billing Address</Title>
            <div className="p-2"></div>
            
            <FormGroup>
                <Label style={formik.errors.billingLine1 ? {color: "#C90808"} : null}>Billing Address Line 1</Label>
                <input style={formik.errors.billingLine1 ? {borderColor: "#C90808"} : null} type="text" name="billingLine1" value={formik.values.billingLine1} onChange={formik.handleChange} placeholder="Enter Address Line 1"/>
                <ErrorMessage>{formik.errors.billingLine1}</ErrorMessage>
            </FormGroup>
            <FormGroup>
                <Label style={formik.errors.billingLine2 ? {color: "#C90808"} : null}>Billing Address Line 2</Label>
                <input style={formik.errors.billingLine2 ? {borderColor: "#C90808"} : null} type="text" name="billingLine2" value={formik.values.billingLine2} onChange={formik.handleChange} placeholder="Enter Address Line 2"/>
                <ErrorMessage>{formik.errors.billingLine2}</ErrorMessage>
            </FormGroup>
            <FormGroup>
                <Label style={formik.errors.billingLine3 ? {color: "#C90808"} : null}>Billing Address Line 3</Label>
                <input style={formik.errors.billingLine3 ? {borderColor: "#C90808"} : null} type="text" name="billingLine3" value={formik.values.billingLine3} onChange={formik.handleChange} placeholder="Enter Address Line 3 (Optional)"/>
                <ErrorMessage>{formik.errors.billingLine3}</ErrorMessage>
            </FormGroup>
            <FormGroup>
                <Label style={formik.errors.location ? {color: "#C90808"} : null}>Town/City</Label>
                <input style={formik.errors.location ? {borderColor: "#C90808"} : null} type="text" name="location" value={formik.values.location} onChange={formik.handleChange} placeholder="Enter Town/City"/>
                <ErrorMessage>{formik.errors.location}</ErrorMessage>
            </FormGroup>
            <FormGroup>
                <Label style={formik.errors.postcode ? {color: "#C90808"} : null}>Postcode</Label>
                <input style={formik.errors.postcode ? {borderColor: "#C90808"} : null} type="text" name="postcode" value={formik.values.postcode} onChange={formik.handleChange} placeholder="Enter Postcode"/>
                <ErrorMessage>{formik.errors.postcode}</ErrorMessage>
            </FormGroup>
        </FormikStep>
    )
}

export default BillingAddress
