import styled from "styled-components";
import { Col } from "react-bootstrap";


const StyledContactInfo = styled.div`
    font-size: 14px;
    float: left;
    text-align: left;
    p {
        font-size: 12px;
        text-align: left;
        margin-bottom: 0;
    }
    @media (min-width: 768px) {
        float: none;
        text-align: center;
        p {
            text-align: center;
        }
    }
`;

function ContactInfo() {
    return (
        <Col lg={4} md={12}>
            <StyledContactInfo>
                <p>info@strike9training.co.uk</p>
            </StyledContactInfo>
        </Col>
    )
}

export default ContactInfo;