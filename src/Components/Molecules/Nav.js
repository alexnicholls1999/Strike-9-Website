import { Component } from 'react'
import PropTypes from "prop-types";
import styled from "styled-components";
import { Nav, NavbarCollapse } from "react-bootstrap";


const StyledNav = styled(Nav)`
    padding-top: 10px !important;
    padding-bottom: 10% !important;
    
    @media (min-width: 768px){
        padding: 0 !important;
    }
`;

class Nav extends Component {
    
    constructor(props){
        super(props)
    }

    render() {
        return (
            <NavbarCollapse id="basic-navbar-nav" open={this.props.open}>
                <StyledNav className="ms-auto">
                    {this.props.pages.map((page, index) => {
                        const { exact, path, navTitle } = page;
                        return (
                            <Nav.Item key={index}>
                                <Nav.Link as={StyledNavLink} exact={exact} to={path}>{navTitle}</Nav.Link>
                            </Nav.Item>
                        )
                    })}
                </StyledNav>
            </NavbarCollapse>
        )
    }
}

Nav.propTypes = {
    pages: PropTypes.object.isRequired
}


export default Nav;