import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    body {
        font-family: ${({theme}) => theme.typography.fontFamily.Muli}, ${({theme}) => theme.typography.fontFamily.Arial};
    }

    h1 {
        font-size: clamp(${({theme}) => theme.typography.h1.fontSize.min}, ${({theme}) => theme.typography.h1.fontSize.default}, ${({theme}) => theme.typography.h1.fontSize.max});
        font-weight: ${({theme}) => theme.typography.fontWeight.bold};
    }

    .slideInRight {
        transform: translateX(0);
    } 

    .slideInLeft {
        transform: translateX(0);
    }

    .slideInLeft, .slideInRight {
        opacity: 0;
        transition: transform 400ms ease-in;
    }

    .slideInLeft.isVisible, .slideInRight.isVisible {
        opacity: 1;
        transform: translateX(0);
        display: block;
    }

    @media (min-width: 768px) {
        .slideInRight {
            transform: translateX(50%);
        }

        .slideInLeft {
            transform: translateX(-50%);
        }
    }
`;


export default GlobalStyles;