import { useFormikContext } from 'formik';
import styled from "styled-components";
import {Col, Row} from "react-bootstrap";

import FormControl from "./../../Molecules/FormControl";


const Title = styled.h3`
    color: ${({theme}) => theme.colors.primary.RoyalPurple};
    font-weight: bold;
`;

function BillingAddress() {
    const formik = useFormikContext();

    const configBillingAddress1 =  {
        style: formik.errors.billingAddressLine1 ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "billingAddressLine1",
        value: formik.values.billingAddressLine1,
        onChange: formik.handleChange,
        placeholder: "Enter Billing Address Line 1"
    };
    
    const configBillingAddress2 =  {
        style: formik.errors.billingAddressLine2 ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "billingAddressLine2",
        value: formik.values.billingAddressLine2,
        onChange: formik.handleChange,
        placeholder: "Enter Billing Address Line 2"
    };

    const configBillingAddress3 =  {
        style: formik.errors.billingAddressLine3 ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "billingAddressLine3",
        value: formik.values.billingAddressLine3,
        onChange: formik.handleChange,
        placeholder: "Enter Billing Address Line 3"
    };

    const configLocation =  {
        style: formik.errors.location ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "location",
        value: formik.values.location,
        onChange: formik.handleChange,
        placeholder: "Enter Location"
    };

    const configPostcode =  {
        style: formik.errors.postcode ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "postcode",
        value: formik.values.postcode,
        onChange: formik.handleChange,
        placeholder: "Enter Postcode"
    };

    return (
        <>
            <Row>
                <h3 className="py-2">Event Details</h3>
            </Row>
            <Row>
                <Col md={6}>
                    <FormControl 
                        controls={{
                            label: {
                                style: formik.errors.teamName ? {borderColor: "#C90808"} : null,
                                name: "Billing Address Line 1",
                            },
                            errMsg: formik.errors.teamName ? {borderColor: "#C90808"} : null
                        }}
                        {...configBillingAddress1}
                    />
                </Col>
                <Col md={6}>
                    <FormControl 
                        controls={{
                            label: {
                                style: formik.errors.teamName ? {borderColor: "#C90808"} : null,
                                name: "Billing Address Line 2",
                            },
                            errMsg: formik.errors.teamName ? {borderColor: "#C90808"} : null
                        }}
                        {...configBillingAddress2}
                    />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormControl 
                        controls={{
                            label: {
                                style: formik.errors.teamName ? {borderColor: "#C90808"} : null,
                                name: "Billing Address Line 3",
                            },
                            errMsg: formik.errors.teamName ? {borderColor: "#C90808"} : null
                        }}
                        {...configBillingAddress3}
                    />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormControl 
                        controls={{
                            label: {
                                style: formik.errors.teamName ? {borderColor: "#C90808"} : null,
                                name: "Town/City",
                            },
                            errMsg: formik.errors.teamName ? {borderColor: "#C90808"} : null
                        }}
                        {...configLocation}
                    />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormControl 
                        controls={{
                            label: {
                                style: formik.errors.teamName ? {borderColor: "#C90808"} : null,
                                name: "Postcode",
                            },
                            errMsg: formik.errors.teamName ? {borderColor: "#C90808"} : null
                        }}
                        {...configPostcode}
                    />
                </Col>
            </Row>
        </>
    )
}

export default BillingAddress