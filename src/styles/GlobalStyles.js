import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6
    p {
        margin: 0;
    }

    body { 
        font-family: ${({theme}) => theme.typography.fontFamily.Muli}, ${({theme}) => theme.typography.fontFamily.Helvetica}, ${({theme}) => theme.typography.fontFamily.Arial};
        font-size: 1.3125rem;
        line-height: 1.6;
    }

    h1 {
        font-weight: ${({theme}) => theme.typography.fontWeight.bold};
        color: ${({theme}) => theme.colors.neutral[100]};
    }

    h2,
    h3 {
        font-weight: ${({theme}) => theme.typography.fontWeight.bold};
        color: ${({theme}) => theme.colors.neutral[900]};
    }

    h1, h2, h3 {
        line-height: 1.2;
    }

    p {
        font-size: 1rem;
    }

    img {
        display: block;
        max-width: 100%;
    }


`;

export default GlobalStyles