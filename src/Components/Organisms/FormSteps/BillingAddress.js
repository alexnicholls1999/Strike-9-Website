import { useFormikContext } from "formik";
import FormControl from "./../../Molecules/FormControl";
import { Row, Col } from "react-bootstrap";

export default function BillingAddress() {

    const { values, errors, handleChange } = useFormikContext()

    const configBillingAddress1 =  {
        style: errors.billingAddressLine1 ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "billingAddressLine1",
        value: values.billingAddressLine1,
        onChange: handleChange,
        placeholder: "Enter Billing Address Line 1"
    };
    
    const configBillingAddress2 =  {
        style: errors.billingAddressLine2 ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "billingAddressLine2",
        value: values.billingAddressLine2,
        onChange: handleChange,
        placeholder: "Enter Billing Address Line 2"
    };

    const configBillingAddress3 =  {
        style: errors.billingAddressLine3 ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "billingAddressLine3",
        value: values.billingAddressLine3,
        onChange: handleChange,
        placeholder: "Enter Billing Address Line 3"
    };

    const configLocation =  {
        style: errors.location ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "location",
        value: values.location,
        onChange: handleChange,
        placeholder: "Enter Location"
    };

    const configPostcode =  {
        style: errors.postcode ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "postcode",
        value: values.postcode,
        onChange: handleChange,
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
                                style: errors.billingAddressLine1 ? {borderColor: "#C90808"} : null,
                                name: "Billing Address Line 1",
                            },
                            errMsg: errors.billingAddressLine1 
                        }}                        
                        {...configBillingAddress1}
                    />
                </Col>
                <Col md={6}>
                    <FormControl 
                        controls={{
                            label: {
                                style: errors.billingAddressLine2 ? {borderColor: "#C90808"} : null,
                                name: "Billing Address Line 2",
                            },
                            errMsg: errors.billingAddressLine2 
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
                                style: errors.billingAddressLine3 ? {borderColor: "#C90808"} : null,
                                name: "Billing Address Line 3",
                            },
                            errMsg: errors.billingAddressLine3 
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
                                style: errors.location ? {borderColor: "#C90808"} : null,
                                name: "Town/City ",
                            },
                            errMsg: errors.location 
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
                                style: errors.postcode ? {borderColor: "#C90808"} : null,
                                name: "Postcode",
                            },
                            errMsg: errors.postcode 
                        }}
                        {...configPostcode}
                    />
                </Col>
            </Row>
        </>
    )
}