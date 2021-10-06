const theme = {
    colors: {
        primary: {
            DaisyBush: "#4D2AA5",
            RoyalPurple: "#5E3DB3",
        },
        secondary: {
            Violet: "#050727" 
        },
        neutral: {
            White: "white",
            Black: "black",
            BlackRock: "#190438",
            Grey: "#E5E5E5",
            LightGrey: "#C6C5C5"
        }
    },
    typography: {
        fontFamily: {
            Primary: "Muli",
            Secondary: "Helvetica",
            Third: "Arial"
        },
        fontWeight: {
            light: 300,
            regular: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
            xbold: 800,
            black: 900
        },
        h1: {
            fontSize: {
                min: "25px",
                default: "0.5rem + 4.25vw",
                max: "10vw"
            }
        },
        h2: {
            fontSize: {
                min: "1.5rem",
                default: "0.225rem + 4vw",
                max: "8vw"
            }
        },
        h3: {
            fontSize: {
                min: "1.3rem",
                default: "0.125rem + 2vw",
                max: "6vw"
            }
        },
        p: {
            fontSize: {
                min: "12px",
                default: "1.2vw",
                max: "25px"
            }
        }
    },
    viewport: {
        xl: "1200px",
        lg: "990px",
        md: "768px",
        sm: "400px"
    },
}

export default theme;