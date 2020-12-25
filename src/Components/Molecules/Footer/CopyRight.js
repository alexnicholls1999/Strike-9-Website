import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'


const BottomFooter = styled.div`

    padding-top: 50px;

    p {
        border-top: 3px solid #5E3DB3;
        padding: 40px;
    }

`;

function CopyRight() {

    const [year, setYear] = useState();

    const getYear = () => setYear(new Date().getFullYear())

    useEffect(() => {
        getYear();
    }, [])

    return (
        <Row>
            <Col lg={12} className="p-2 text-center">
                <BottomFooter>
                    <p> ©{year} STRIKE 9 TRAINING </p>
                </BottomFooter>
            </Col>
        </Row>
    )
}

export default CopyRight;