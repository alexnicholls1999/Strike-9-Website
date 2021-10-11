import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    body { 
        font-family: ${({theme}) => theme.typography.fontFamily.Muli}, ${({theme}) => theme.typography.fontFamily.Helvetica}, ${({theme}) => theme.typography.fontFamily.Arial};
        font-size: 1.3125rem;
        line-height: 1.6;
    }

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
    
    h2,
    h3 {
        font-weight: ${({theme}) => theme.typography.fontWeight.bold};
        color: ${({theme}) => theme.colors.neutral[900]};
    }

    h1, h2, h3 {
        line-height: 1.2;
    }

    h1 {
        font-size: clamp(2rem, .75rem + 5vw, 5rem);
        font-weight: ${({theme}) => theme.typography.fontWeight.bold};
        color: ${({theme}) => theme.colors.neutral[100]};
    }

    h2 {
        font-size: clamp(1.75rem, .75rem + 3.75vw, 3rem);
    }

    h3 {
        font-size: clamp(1.25rem, .75rem + 3vw, 2rem);
    }

    h4 {
        font-size: clamp(1rem, .75rem + .5vw, 1.75rem);
    }

    h5 {
        font-size: clamp(.75rem, 1rem + .5vw, 1.25rem);
    }

    p {
        font-size: clamp(1rem, .75rem + .25vw, 5rem);
    }

    img {
        display: block;
        max-width: 100%;
    }


`;

export default GlobalStyles