const theme = {
    colors: {
        primary: {
            DaisyBush: "#4D2AA5",
            RoyalPurple: "#5E3CDC",
            
        },
        secondary: {
            Violet: "#050727" 
        },
        neutral: {
            White: "white",
            Black: "black",
            Grey: "#E5E5E5"
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
                min: "21px",
                default: "5vw",
                max: "60px"
            }
        },
        h2: {
            fontSize: {
                min: "1.5vh",
                default: "4rem",
                max: "7vw"
            }
        },
        p: {
            fontSize: {
                min: "15px",
                default: "1.2vw",
                max: "25px"
            }
        }
    },
    viewport: {
        lg: "990px",
        md: "768px",
        sm: "400px"
    },
}

export default theme;