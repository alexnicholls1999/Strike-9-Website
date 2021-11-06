import { useEffect, useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import theme from "../../../styles/theme";
import SocialMedia from "../SocialMedia";

const BottomFooter = styled.div`
    padding: 25px 0;
    display: block;
    border-top: ${({theme}) => `2px solid ${theme.colors.neutral[200]}`};
    margin-top: 40px;

    @media (min-width: 768px) {
        padding: 50px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

const StyledCopyRight = styled.p`
    padding-left: 10px;
    font-size: 12px;
    margin-bottom: 0;
`;

const StyledSocialMediaWrapper = styled.div`
    svg {
        font-size: 1.75rem;
    }

    > * {
        justify-content: flex-start;
    }

    @media(min-width: ${({theme}) => theme.viewport.md}) {
        margin-left: auto;
    }

`;

function CopyRight() {

    const [ year, setYear ] = useState();

    const getYear = () => setYear(new Date().getFullYear());

    useEffect(() => {
        getYear();
    }, [])


    return (
        <Row>
            <Col lg={12} className="p-2">
                <BottomFooter>
                    <StyledCopyRight>©{year} STRIKE 9 TRAINING</StyledCopyRight>
                    <StyledSocialMediaWrapper>
                        <SocialMedia />
                    </StyledSocialMediaWrapper>
                </BottomFooter>
            </Col>
        </Row>
    )
}

export default CopyRight;