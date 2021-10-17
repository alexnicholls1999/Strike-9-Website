import styled from "styled-components"

const StyledTextArea = styled.textarea`


`;

function TextArea({...props}) {
    return <StyledTextArea {...props}/>
}

export default TextArea
