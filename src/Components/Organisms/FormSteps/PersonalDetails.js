import { useFormikContext } from "formik";
import FormControl from "./../../Molecules/FormControl";
import { Row, Col } from "react-bootstrap";

export default function PersonalDetails() {
    const { values, errors, handleChange } = useFormikContext();

    const configFirstName =  {
        style: errors.firstName ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "firstName",
        value: values.firstName,
        onChange: handleChange,
        placeholder: "Enter First Name"
    };

    const configLastName = {
        style: errors.lastName ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "lastName",
        value: values.lastName,
        onChange: handleChange,
        placeholder: "Enter Last Name"
    }

    const configEmail = {
        style: errors.email ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "email",
        value: values.email,
        onChange: handleChange,
        placeholder: "Enter Email"
    }

    const configMobile = {
        style: errors.mobile ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "mobile",
        value: values.mobile,
        onChange: handleChange,
        placeholder: "Enter Mobile"
    }

    return (
        <>
            <Row>
                <h3 className="py-2">Personal Details</h3>
            </Row>
            <Row>
                <Col md={6}>
                    <FormControl 
                        controls={{
                            label: {
                                style: errors.firstName ? {borderColor: "#C90808"} : null,
                                name: "Billing Address Line 1",
                            },
                            errMsg: errors.firstName ? {borderColor: "#C90808"} : null
                        }}
                        {...configFirstName}
                    />
                </Col>
                <Col md={6}>
                    <FormControl 
                        controls={{
                            label: {
                                style: errors.lastName ? {borderColor: "#C90808"} : null,
                                name: "Billing Address Line 2",
                            },
                            errMsg: errors.lastName ? {borderColor: "#C90808"} : null
                        }}
                        {...configLastName}
                    />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormControl 
                        controls={{
                            label: {
                                style: errors.email ? {borderColor: "#C90808"} : null,
                                name: "Email",
                            },
                            errMsg: errors.email ? {borderColor: "#C90808"} : null
                        }}
                        {...configEmail}
                    />
                </Col>
                <Col md={6}>
                    <FormControl 
                        controls={{
                            label: {
                                style: errors.mobile ? {borderColor: "#C90808"} : null,
                                name: "Mobile",
                            },
                            errMsg: errors.mobile ? {borderColor: "#C90808"} : null
                        }}
                        {...configMobile}
                    />
                </Col>
            </Row>
        </>
    )

}