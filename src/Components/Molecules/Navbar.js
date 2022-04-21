import { useContext, useState } from 'react';
import styled from 'styled-components';
import Burger from './../Atoms/Iconography/Hamburger';
import { useLocation, useHistory } from 'react-router-dom';
import { RouteContext } from '../../utils/Context/RouteContext';
import Button from "./../Atoms/Form/Button";

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  z-index: 4;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  color: ${({theme, secondary}) => secondary ? theme.colors.neutral[900] : theme.colors.neutral[300]};
  padding: 0.5rem;

  @media (max-width: ${({theme}) => theme.viewport.md}) {
    flex-flow: column nowrap;
    background-color: ${({theme}) => theme.colors.neutral[800]};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding: 6rem 0.75rem;
    transition: transform 0.3s ease-in-out;
    z-index: 2;
  }
`;

const NavLink = styled.li`
  color: ${({theme, secondary}) => secondary ? theme.colors.neutral[900] : theme.colors.neutral[300]};
  padding: 15px 10px;
  margin: 2px 0;
  font-size: 1rem;
  cursor: pointer;

  ${({active}) => active && `
    border-bottom: 3px solid white;
    font-weight: bold;
    color: white;
    text-decoration: none;
  `}

  ${({auth}) => auth && `
    font-weight: bold;
    color: white;
    text-decoration: none;
    border: none;
    border-radius: .5rem;
  `}

  @media(max-width: ${({theme}) => theme.viewport.md}) {
    ${({active}) => active && `
      font-weight: bold;
      color: white !important;
      text-decoration: none;
      background: #1E2147;
      border: none;
      border-radius: .5rem;
    `}

    ${({auth}) => auth && `
      font-weight: bold;
      color: white;
      text-decoration: none;
      background: #1E2147;
      border: none;
      border-radius: .5rem;
    `}

    color: ${({theme, secondary}) => secondary ? theme.colors.neutral[100] : theme.colors.neutral[300]};
  }

`;

const StyledButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 1rem;

    button { 
      width: 7.5rem;
    }

    @media(min-width: ${({theme}) => theme.viewport.xl}) {
      button {
        width: 9.5rem;
      }
    }

    @media(max-width: ${({theme}) => theme.viewport.md}) {
      position: absolute;
      bottom: 2rem;
      left: 0;
      width: 100%;
      display: flex;
      align-items: center;
      padding: 1rem;

      button {
        width: 100%;
      }
    }
`;

function Navbar({isAuthenticated, auth, signOut, secondary}){
    const routes = useContext(RouteContext);
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const history = useHistory();

    const { pathname } = location;

    const splitLocation = pathname.split("/");

    return (
        <Nav> 
            <Ul secondary={secondary} open={open}>
              {routes.links.map((route, index) => <NavLink key={index} secondary={secondary} active={splitLocation[1] === `${route.location}`} onClick={() => history.push(`${route.path}`)}>{route.routeName}</NavLink>)}
              {!auth ? (
                isAuthenticated ? (
                  <StyledButtonWrapper>
                      <Button secondary text="Logout" onClick={signOut}/>
                  </StyledButtonWrapper>
                ) : (
                  <StyledButtonWrapper>
                    <Button secondary text="Create Account" onClick={() => history.push("/createaccount")}/>
                    <Button secondary text="Login" onClick={() => history.push("/login")}/>
                  </StyledButtonWrapper>
                )
              ) : null}
            </Ul>
            <Burger onClick={() => setOpen(!open)} open={open}/>
        </Nav>
    )
}

export default Navbar