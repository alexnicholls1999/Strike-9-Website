import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import styled from "styled-components";
import Logo from "../Atoms/Iconography/Logo";
import { useContext } from "react";
import { RouteContext } from "../../utils/Context/RouteContext";

const StyledSideBar = styled.div`
  flex-flow: column nowrap;
  background-color: #090c35;
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  height: 100vh;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  z-index: 1;

  @media (min-width: ${({theme}) => theme.viewport.md}) {
    width: 365px;
  }

  @media (min-width: ${({theme}) => theme.viewport.lg}) {
    display: none;
  }
`; 

const SideBarNav = styled.nav`
  padding: 10px;
  list-style: none;
`;

const SideBarLink = styled.li`
  text-align: left;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  background-color: ${({ active }) => (active ? "#1E2147" : "none")};
  font-weight: ${({ active }) => (active ? "bold" : "regular")};
  color: white;
`;

const SideBarFooter = styled.div`
  position: absolute;
  bottom: 10%;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  align-content: space-inbetween;
  width: 100%;

  button {
    width: 150px;
    &:nth-child(1) {
      margin-right: 10px;
    }
  }

  @media (max-width: ${({theme}) => theme.viewport.sm}) {
    button {
      width: 100px;
    }
  }
`;

function SideBar({ open }) {

  const pages = useContext(RouteContext);

  return (
    <StyledSideBar open={open}>
      <SideBarNav>
          {pages.map((page, i) => {

            const { routeName, exact } = page;

            return (
                <SideBarLink active={exact}>{routeName}</SideBarLink>
            )
          })} 
      </SideBarNav>
    </StyledSideBar>
  );
}

SideBar.propTypes = {
    open: PropTypes.bool,
    pages: PropTypes.object.isRequired
}

export default SideBar;