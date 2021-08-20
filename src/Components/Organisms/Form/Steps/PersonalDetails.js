import styled from "styled-components";
import { useFormikContext } from 'formik';
import { Container, Col, Row } from 'react-bootstrap';
import Input from '../../../Atoms/Form/Input';
import Label from '../../../Atoms/Form/Label';
import FormControl from "../../../Molecules/FormControl";
import Gender from "../../../Molecules/Form/Gender";
import DatePicker from "../../../Molecules/Form/DatePicker";

const StyledUl = styled.ul`
    list-style: none;
    padding: 0;
`;

const Title = styled.h3`
    color: ${({theme}) => theme.colors.primary.RoyalPurple};
    font-weight: bold;
`;




function PersonalDetails() {
    const formik = useFormikContext();

    const configFirstName =  {
        style: formik.errors.firstName ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "firstName",
        value: formik.values.firstName,
        onChange: formik.handleChange,
        placeholder: "Enter First Name"
    };

    const configLastName =  {
        style: formik.errors.lastName ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "lastName",
        value: formik.values.lastName,
        onChange: formik.handleChange,
        placeholder: "Enter Last Name"
    };

    const configEmail =  {
        style: formik.errors.email ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "email",
        value: formik.values.email,
        onChange: formik.handleChange,
        placeholder: "Enter Email"
    };

    const configMobile = {
        style: formik.errors.mobile ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "mobile",
        value: formik.values.mobile,
        onChange: formik.handleChange,
        placeholder: "Enter Mobile"
    }

    const configGender = {
        name: "gender",
        style: formik.errors.mobile ? {borderColor: "#C90808"} : null,
        value: formik.values.gender,
        errMsg: formik.errors.gender,
        options: [
            {
                name: "Enter Gender"
            },
            {
                name: "Male"
            },
            {
                name: "Female"
            }
        ],
        onChange: formik.handleChange
    }
    
    return (
        <Container>
            <Title>Personal Details</Title>
            <div className="py-2"></div>

            <Row>
                <Col md={6}>
                    <FormControl labelProps={{labelName: "First Name: ", labelStyle: formik.errors.firstName ? {color: "#C90808"} : null}} errMsg={formik.errors.firstName} {...configFirstName}/>
                </Col>
                <Col md={6}>
                    <FormControl labelProps={{labelName: "Last Name: ", labelStyle: formik.errors.lastName ? {color: "#C90808"} : null}} errMsg={formik.errors.lastName} {...configLastName}/>
                </Col>
                <Col md={6}>
                    <FormControl labelProps={{labelName: "Email: ", labelStyle: formik.errors.email ? {color: "#C90808"} : null}} errMsg={formik.errors.email} {...configEmail}/>
                </Col>
                <Col md={6}>
                    <FormControl labelProps={{labelName: "Mobile: ", labelStyle: formik.errors.mobile ? {color: "#C90808"} : null}} errMsg={formik.errors.mobile} {...configMobile}/>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Gender labelProps={{labelName: "Gender: ", labelStyle: formik.errors.gender ? {color: "#C90808"} : null}} errMsg={formik.errors.gender} {...configGender} />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <DatePicker name="selectedDate" labelProps={{labelName: "Date of Birth: ", labelStyle: formik.errors.selectedDate ? {color: "#C90808"} : null}} errMsg={formik.errors.selectedDate}/>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    
                </Col>
            </Row>

        </Container>
    )
}

export default PersonalDetails
