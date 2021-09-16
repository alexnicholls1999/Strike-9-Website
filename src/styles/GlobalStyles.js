import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    body {
        font-family: ${({theme}) => theme.typography.fontFamily.Primary}, ${({theme}) => theme.typography.fontFamily.Secondary}, ${({theme}) => theme.typography.fontFamily.Third};
    }

    h1 {
        font-size: clamp(${({theme}) => theme.typography.h1.fontSize.min}, ${({theme}) => theme.typography.h1.fontSize.default}, ${({theme}) => theme.typography.h1.fontSize.max});
        font-weight: ${({theme}) => theme.typography.fontWeight.xbold};
    }

    p {
        font-size: clamp(${({theme}) => theme.typography.p.fontSize.min}, ${({theme}) => theme.typography.p.fontSize.default}, ${({theme}) => theme.typography.p.fontSize.max});
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