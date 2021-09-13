import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        font-family: ${({theme}) => theme.typography.fontFamily.Primary}, ${({theme}) => theme.typography.fontFamily.Secondary}, ${({theme}) => theme.typography.fontFamily.Third};
    }

`;


export default GlobalStyles;