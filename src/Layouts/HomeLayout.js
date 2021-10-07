import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../Grid/Container";

function HomeLayout({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}

HomeLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default HomeLayout
