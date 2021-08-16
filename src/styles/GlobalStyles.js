import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    body {
        font-family: ${({theme}) => theme.typography.fontFamily.Muli}, ${({theme}) => theme.typography.fontFamily.Arial};
    }

    h1 {
        font-size: clamp(${({theme}) => theme.typography.h1.fontSize.min}, ${({theme}) => theme.typography.h1.fontSize.default}, ${({theme}) => theme.typography.h1.fontSize.max});
        font-weight: ${({theme}) => theme.typography.fontWeight.bold};
        color: ${({theme}) => theme.colors.neutral.White};
    }
`;


export default GlobalStyles;