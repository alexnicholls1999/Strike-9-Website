import { useState } from 'react';
import styled from 'styled-components';
import Burger from './../Atoms/Iconography/Hamburger';

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
    font-weight: bold;
    z-index: 3;
    color: ${({theme}) => theme.colors.neutral[200]};
  }
`

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <Nav>
            <div className="logo">
                Strike 9 Training
            </div>
            <Burger onClick={() => setOpen(!open)} open={open}/>
        </Nav>
    )
}

export default Navbar