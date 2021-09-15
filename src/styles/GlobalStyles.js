import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    body {
        font-family: ${({theme}) => theme.typography.fontFamily.Primary}, ${({theme}) => theme.typography.fontFamily.Secondary}, ${({theme}) => theme.typography.fontFamily.Third};
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