import styled from "styled-components";
import Button from "../Components/Atoms/Buttons/Button";
import Hero from "../Components/Organisms/Hero";

const ButtonWrapper = styled.div`
    width: 250px;
`;


function About() {
    return (
        <>
            <Hero secondary heroDetails={{title: "ABOUT STRIKE 9 TRAINING", paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt recusandae eos tempora harum cupiditate eveniet vitae optio vero facilis itaque."}} >
                <ButtonWrapper>
                    <Button text="REGISTER" />
                </ButtonWrapper>
            </Hero>

        </>
    )
}

export default About
