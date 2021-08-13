import { useHistory } from 'react-router-dom'
import Strike9Logo from "./../../../assets/Strike-9-Light-Logo.png"
import styled from "styled-components";

const StyledLogo = styled.img`
    height: 2.5rem;
`;


function Logo() {

    const history = useHistory();

    const handleOnLogoClick = (e) => {
        e.preventDefault();
        history.push("/");
    }

    return <StyledLogo src={Strike9Logo} onClick={handleOnLogoClick} alt="strike-9-logo"/>
}

export default Logo;