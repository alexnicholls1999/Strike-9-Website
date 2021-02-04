import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import BoostrapNavbar from '../Molecules/Navbar';


const HeaderWrapper = styled.div`
    display: flex;
    position: relative;
    background-color: ${({theme, secondary}) => secondary ? theme.colors.primary.RoyalPurple : "none"};
`;

function Header(props) {
    const {secondary} = props;

    return (
        <HeaderWrapper secondary={secondary}>
            <Container>
                <BoostrapNavbar />
            </Container>
        </HeaderWrapper>

    )
}

Header.propTypes = {
    secondary: PropTypes.bool
}

Header.defaultProps = {
    secondary: false
}
export default Header;
