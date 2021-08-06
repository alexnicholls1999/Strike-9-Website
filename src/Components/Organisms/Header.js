import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import BoostrapNavbar from '../Molecules/Navbar';


const HeaderWrapper = styled.div`

`;

function Header(props) {
    const {secondary, navbg, menuColor} = props;

    return (
        <HeaderWrapper secondary={secondary} >
            <BoostrapNavbar navbg={navbg} menuColor={menuColor} />
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
