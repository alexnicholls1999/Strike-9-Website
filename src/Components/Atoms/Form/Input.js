import styled from "styled-components"

const StyledInput = styled.input`
    font-size: 15px;
    padding: 10px;
    width: 350px;
    border-radius: 3px;
    border: 1px solid #F4F4F4;
    display: block;
`;

function Input({...props}) {
    return <StyledInput {...props} />
}

export default Input;
