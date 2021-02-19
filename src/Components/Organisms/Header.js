import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import BoostrapNavbar from '../Molecules/Navbar';


const HeaderWrapper = styled.div`
    display: flex;
    // background-color: ${({theme, secondary}) => secondary ? theme.colors.primary.RoyalPurple : "none"};
    background: ${({ open }) => (open ? "rotate(45deg)" : "rotate{0}")};
    
`;

function Header(props) {
    const {secondary, open} = props;

    return (
        <HeaderWrapper secondary={secondary} open={open}>
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
