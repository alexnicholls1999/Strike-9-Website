import React from 'react'
import { Row } from 'react-bootstrap'
import styled from 'styled-components'
import Subtitle from '../../Atoms/Typography/Subtitle'

const StyledSection = styled.div`


`;

const StyledSectionTitle = styled.div`
 

`;

function Section({growth, section}) {
    return (
        <Row>
            <Col md={6} sm className={growth && "ms-auto"}>
                <StyledSection>
                    <StyledSectionTitle>
                        <Subtitle subtitle={section.subtitle}/>
                    </StyledSectionTitle>
                    <Paragraph text={section.message}/>
                </StyledSection>
            </Col>
        </Row>
    )
}

Section.propTypes = {
    growth: PropTypes.bool.isRequired,
    section: PropTypes.shape({
        subtitle: PropTypes.string.isRequired,
        message: PropTypes.strin.isRequired
    })
}

export default Section
