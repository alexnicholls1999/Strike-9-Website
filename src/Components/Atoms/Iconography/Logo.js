import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Strike9Logo from "../../../assets/Strike-9-Light-Logo.png";

const StyledLogo = styled.img`
    height: 2.5rem;
`;

function Logo() {

    const history = useHistory()

    const handleLogoLink = () => {
        history.push("/");
    }

    return (
        <>
            <StyledLogo src={Strike9Logo} alt="strike-9-logo"/>
        </>
    )
}

export default Logo;
