import React from 'react';
import styled from "styled-components";
import {Container, Row } from "react-bootstrap";

const StyledNoResults = styled.div`
    background-color: white;
    padding: 10rem 0;
    text-align: center;
    width: 100%;
    z-index: 1;
    position: absolute;
`

export default function NoResults() {
    return (
        <StyledNoResults>
            <h3>No search results found. Please try again!</h3>
        </StyledNoResults>

    )
}
