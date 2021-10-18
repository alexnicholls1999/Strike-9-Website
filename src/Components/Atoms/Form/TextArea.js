import styled from "styled-components"

const StyledTextArea = styled.textarea`
    width: 100%;
    border-radius: 0.1rem;
    border: 1px solid ${({theme}) => theme.colors.neutral[200]};
    font-size: 0.85rem;
    font-weight: ${({theme}) => theme.typography.fontWeight.semiBold};
    padding: 0.5rem;

    &::placeholder {
        color: ${({theme}) => theme.colors.neutral[300]};
    }

`;

function TextArea({...props}) {
    return <StyledTextArea {...props}/>
}

export default TextArea
