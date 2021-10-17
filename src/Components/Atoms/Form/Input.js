import styled from "styled-components"

const StyledInput = styled.input`

`;

function Input({...props}) {
    return <StyledInput {...props}/>
}

export default Input
