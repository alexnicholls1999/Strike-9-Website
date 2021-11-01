import styled from "styled-components";

const StyledLogoFooter = styled.div`
    text-align: center;
    padding: 0;
    padding-bottom: 10%;
    float: left;
    @media (min-width: 768px) {
        padding: 25%;
        padding-top: 0;        
    }
`;

function LogoFooter() {
    return (
        <StyledLogoFooter>
            <h4>Strike 9 Training</h4>
        </StyledLogoFooter>
    )
}

export default LogoFooter