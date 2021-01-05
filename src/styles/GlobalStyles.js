import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

body {
    font-family: ${({theme}) => theme.typography.fontFamily};

}



h1 {
    font-size: clamp(${({theme}) => theme.typography.h1.fontSize.min}, 5vw, ${({theme}) => theme.typography.h1.fontSize.max}) ;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.neutral.White}
}

h2 {
    font-size: ${({theme}) => theme.typography.h2.fontSize};
}


h3 {
    font-size: ${({theme}) => theme.typography.h3.fontSize};
}


h4 {
    font-size: ${({theme}) => theme.typography.h4.fontSize};
    font-size: clamp(${({theme}) => theme.typography.h4.fontSize.min}, 5vw, ${({theme}) => theme.typography.h4.fontSize.max}) ;
}

h6 {
    font-size: ${({theme}) => theme.typography.h6.fontSize};
    font-weight: ${({theme}) => theme.typography.h6.fontWeight};
}

em {
    font-size: ${({theme}) => theme.typography.em.fontSize};
}

input[type="text"], input[type="email"], input[type="password"] {
    width: 100%;
    height: 44px;
    border: 1px solid ${({theme}) => theme.colors.darkShade[10]};
    box-sizing: border-box;
    border-radius: 4px;
    margin-bottom: 2%;
    font-size: 22px;
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





`
export default GlobalStyles;