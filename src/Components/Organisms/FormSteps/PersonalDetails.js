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

    const configGender = {
        name: "gender",
        style: errors.gender ? {borderColor: "#C90808"} : null,
        value: values.gender,
        options: [
            {
                name: "Enter Gender"
            },
            {
                name: "Male"
            },
            {
                name: "Female"
            },
        ],
        onChange: handleChange
    }

    const configDateofBirth = {
        style: errors.dateOfBirth ? {borderColor: "#C90808"} : null,
        name: "dateOfBirth"
    }

    const configEthnicity = {
        name: "ethnicity",
        style: errors.ethnicity ? {borderColor: "#C90808"} : null,
        value: values.ethnicity,
        options: [
            {
                name: "Enter Ethnicity"
            },
            {
                name: "White"
            },
            {
                name: "Mixed"
            },
            {
                name: "Black or Black British"
            },
            {
                name: "Asian or Asian British"
            },
            {
                name: "Arab"
            },
            {
                name: "Other"
            },
            {
                name: "Prefer not to say"
            }
        ],
        onChange: handleChange
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
                                name: "First Name",
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
                                name: "Last Name",
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
            <Row>
                <Col md={6}>
                    <FormControl
                        controls={{
                            dropDown: true,
                            name: "gender",
                            label: {
                                style: errors.gender ? {borderColor: "#C90808"} : null,
                                name: "Gender",
                            },
                            errMsg: errors.gender ? {borderColor: "#C90808"} : null
                        }}                        
                        {...configGender}
                    />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormControl 
                        controls={{
                            label: {
                                style: errors.dateOfBirth ? {borderColor: "#C90808"} : null,
                                name: "Date of Birth",
                            },
                            calendar: true,
                            errMsg: errors.dateOfBirth ? {borderColor: "#C90808"} : null
                        }}
                        name="dateOfBirth"
                    />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormControl 
                        controls={{
                            dropDown: true,
                            label: {
                                style: errors.ethnicity ? {borderColor: "#C90808"} : null,
                                name: "Ethnicity",
                            },
                            errMsg: errors.ethnicity ? {borderColor: "#C90808"} : null
                        }}
                        {...configEthnicity}
                    />
                </Col>
            </Row>
        </>
    )
}