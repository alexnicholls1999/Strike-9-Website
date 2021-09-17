import styled from "styled-components";
import Button from "./../Atoms/Form/Button";

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  align-content: space-inbetween;
  width: 100%;

`;

function ButtonWrapper({ buttons }) {
    return (
        <StyledButtonWrapper>
            {buttons.map(({secondary, text}) => { return <Button secondary={secondary} text={text}/>})}
        </StyledButtonWrapper>        
  )
}

export default ButtonWrapper
