import styled from "styled-components";
import Button from "./../Atoms/Form/Button";

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  align-content: space-inbetween;
  width: 100%;

  @media(min-width: ${({theme}) => theme.viewport.lg}) {
    width: ${({width}) => width};
  }
`;

function ButtonWrapper({ buttons, width}) {
    return (
        <StyledButtonWrapper width={width}>
            {buttons.map(({secondary, text, style}) => { return <Button style={style} secondary={secondary} text={text}/>})}
        </StyledButtonWrapper>        
  )
}

export default ButtonWrapper
