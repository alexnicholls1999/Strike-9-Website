import styled from "styled-components";
import Header from '../Components/Organisms/Header';


const IntroWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`;


 export default function HomeLayout() {
    return (
        <>
            <IntroWrapper>
                <Header />
            </IntroWrapper>
            
        </>
    )
}