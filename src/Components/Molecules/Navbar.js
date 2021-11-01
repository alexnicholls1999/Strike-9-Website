import { useContext, useState } from 'react';
import styled from 'styled-components';
import Burger from './../Atoms/Iconography/Hamburger';
import { useLocation, useHistory } from 'react-router-dom';
import { RouteContext } from '../../utils/Context/RouteContext';

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: flex-end;
  z-index: 4;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  color: ${({theme}) => theme.colors.neutral[200]};

  @media (max-width: 768px) {
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
  color: ${({theme}) => theme.colors.neutral[300]};
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

  @media(max-width: ${({theme}) => theme.viewport.md}) {
    ${({active}) => active && `
      font-weight: bold;
      color: white;
      text-decoration: none;
      background: #1E2147;
      border: none;
      border-radius: .5rem;
    `}
  }

`;


const Navbar = () => {
    const routes = useContext(RouteContext);
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const history = useHistory();

    const { pathname } = location;

    const splitLocation = pathname.split("/");

    return (
        <Nav>

            <Ul open={open}>
              {routes.links.map((route, index) => <NavLink key={index} active={splitLocation[1] === `${route.location}`} onClick={() => history.push(`${route.path}`)}>{route.routeName}</NavLink>)}
            </Ul>
            
            <Burger onClick={() => setOpen(!open)} open={open}/>
        </Nav>
    )
}

export default Navbar