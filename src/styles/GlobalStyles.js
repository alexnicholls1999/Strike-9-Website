import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, root, body {
        margin: 0;
    }

    body { 
        font-family: ${({theme}) => theme.typography.fontFamily.Muli}, ${({theme}) => theme.typography.fontFamily.Helvetica}, ${({theme}) => theme.typography.fontFamily.Arial};
    }

    h1 {
        color: ${({theme}) => theme.colors.neutral[900]};
        font-weight: ${({theme}) => theme.typography.fontWeight.xbold};
    }
`;

export default GlobalStyles