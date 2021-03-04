import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle `
    
    body {
        font-family: ${({theme}) => theme.typography.fontFamily};
    }
    h1 {
        font-size: clamp(${({theme}) => theme.typography.h1.fontSize.min}, 5vw, ${({theme}) => theme.typography.h1.fontSize.max}) ;
        font-weight: ${({theme}) => theme.typography.fontWeight.bold};
        color: ${({theme}) => theme.colors.neutral.White};
    }
    h2 {
        font-size: clamp(${({theme}) => theme.typography.h2.fontSize.min}, ${({theme}) => theme.typography.h2.fontSize.default}, ${({theme}) => theme.typography.h2.fontSize.max});
        color: ${({theme}) => theme.colors.neutral.SilverGrey}; 
    }
    h3 {
        font-size: clamp(${({theme}) => theme.typography.h3.fontSize.min}, 5vw, ${({theme}) => theme.typography.h3.fontSize.max}) 
    }
    h4 {
        font-size: clamp(${({theme}) => theme.typography.h4.fontSize.min}, 5vw, ${({theme}) => theme.typography.h4.fontSize.max}) 
    }
    h5 {
        font-size: clamp(${({theme}) => theme.typography.h5.fontSize.min}, 5vw, ${({theme}) => theme.typography.h5.fontSize.max}); 
        color: ${({theme}) => theme.colors.neutral.White};
    }
    h6 {
        font-size: clamp(${({theme}) => theme.typography.h6.fontSize.min}, 5vw, ${({theme}) => theme.typography.h6.fontSize.max}) 
        font-weight: ${({theme}) => theme.typography.h6.fontWeight};
    }

    input[type="text"], input[type="email"], input[type="password"] {
        width: 100%;
        height: 40px;
        border: 1px solid ${({theme}) => theme.colors.darkShade[10]};
        box-sizing: border-box;
        border-radius: 4px;
        margin-bottom: 2%;
        padding-left: 10px;
    }
    textarea {
        border: 1px solid ${({theme}) => theme.colors.darkShade[10]};
        border-radius: 4px;
    }
    label {
        display: inline-block;
        margin-bottom: .5rem;
        font-size: 15px;
        line-height: 15px;
        color: white;
    }
    .MuiStepLabel-label.MuiStepLabel-completed {
        color: ${({theme}) => theme.colors.primary.RoyalPurple} !important;
        font-weight: bold !important;
    }
    .MuiStepLabel-label.MuiStepLabel-active {
        color: ${({theme}) => theme.colors.primary.RoyalPurple} !important;
        font-weight: bold !important;
        
    }
    .MuiStepLabel-label {
        color: #f1f1f1 !important;
        display: none !important;
    }

    .MuiStepConnector-root {
      opacity: 1;
    }

    @media (max-width: 400px) {
      .MuiStepConnector-root {
        opacity: 0;
      }
    }

    @media (min-width: 768px) {
      .MuiStepLabel-label {
        display: block !important;
      }

      .MuiStepLabel-label.MuiStepLabel-active {
        display: block !important;
      }

    }
  
    .MuiTypography-body2 {
        font-size: 1rem !important;
        font-family: "Muli", sans-serif !important;
        font-weight: 400;
        line-height: 1.43;
        letter-spacing: 0.01071em;
    }
    
    .fadeIn {
        opacity: 0;
        visibility: hidden;
        transition: opacity 1200ms ease-in, transform 600ms ease-in,
          visibility 1200ms ease-in;
        will-change: opacity, transform, visibility;
      }
      .fadeIn.isVisible {
        opacity: 1;
        visibility: visible;
      }
      
      .slideInRight {
        transform: translateX(0);
      }
      
      .slideInLeft {
        transform: translateX(0);
      }
      
      .slideInLeft,
      .slideInRight {
        opacity: 0;
        transition: transform 400ms ease-in;
      }
      
      .slideInRight.isVisible,
      .slideInLeft.isVisible {
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
`

export default GlobalStyles;