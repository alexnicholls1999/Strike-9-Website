import styled from "styled-components"

const StyledInput = styled.input`
    width: 100%;
    border-radius: 0.1rem;
    border: 1px solid ${({theme}) => theme.colors.neutral[200]};
    font-size: 0.85rem;
    font-weight: ${({theme}) => theme.typography.fontWeight.semiBold};
    padding: 0.5rem;

    &::placeholder {
        color: ${({theme}) => theme.colors.neutral[300]};
    }

    &:focus {
        outline: none !important;
        border: 2px solid ${({theme}) => theme.colors.primary[600]};
    }

`;

function Input({...props}) {
    return <StyledInput {...props}/>
}
 
export default Input
