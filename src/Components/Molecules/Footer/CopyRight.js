import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'


const BottomFooter = styled.div`



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