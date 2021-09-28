import styled from "styled-components";
import Button from "./../Atoms/Form/Button";

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  align-content: space-inbetween;
  width: 100%;
  margin: 0 auto;
  padding-top: 10px;

  button:nth-child(1) {
    margin-right: 10px;
  }

  @media(min-width: ${({theme}) => theme.viewport.lg}) {
    width: ${({width}) => width};
    padding-top: 25px;
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
