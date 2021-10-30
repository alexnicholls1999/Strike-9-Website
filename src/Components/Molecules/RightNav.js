import styled from 'styled-components';
import { useLocation, useHistory } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  color: ${({theme}) => theme.colors.neutral[200]};

  .active {
    border-bottom: 3px solid white;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }

  li {
    color: ${({theme}) => theme.colors.neutral[300]};
    padding: 15px 10px;
    margin: 2px 0;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${({theme}) => theme.colors.neutral[800]};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding: 6rem 0.75rem;
    transition: transform 0.3s ease-in-out;
    z-index: 2;

    li {
      font-size: 2rem;
    } 

    .active {
        font-weight: bold;
        color: white;
        text-decoration: none;
        background: #1E2147;
        border: none;
        border-radius: .5rem;
    }
  }
`;

const RightNav = ({ open }) => {

    const location = useLocation();
    const history = useHistory();

    const { pathname } = location;

    const splitLocation = pathname.split("/");

  return (
    <Ul open={open}>
      <li onClick={() => history.push("/")}className={splitLocation[1] === "" ? "active" : ""}>Home</li>
      <li onClick={() => history.push("/aboutus")}className={splitLocation[1] === "aboutus" ? "active" : ""}>About Us</li>
      <li onClick={() => history.push("/training")}className={splitLocation[1] === "training" ? "active" : ""}>Training</li>
      <li onClick={() => history.push("/events")}className={splitLocation[1] === "events" ? "active" : ""}>Events</li>
      <li onClick={() => history.push("/coaching")}className={splitLocation[1] === "coaching" ? "active" : ""}>Coaching</li>
      <li onClick={() => history.push("/contact")}className={splitLocation[1] === "contact" ? "active" : ""}>Contact</li>
    </Ul>
  )
}

export default RightNav
