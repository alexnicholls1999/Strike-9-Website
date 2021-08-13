const theme = {
    colors: {
        primary: {
            DaisyBush: "#4D2AA5",
            RoyalPurple: "#5E3DB3",
            Heliotrope: "#A786F9",
            Perfume: "#D5C6F8",
            Whisper: "#F5F4F9",
        },
        secondary: {
            Violet: "#050727" 
        },
        neutral: {
            BlackRock: "#190438",
            Black: "#000000",
            SilverGrey: "#C2C2C2",
            White: "#FFFFFF"
        },
        feedback: {
            Correct: "#37D574",
            Error: "#C90808"
        },
        darkShade: {
            100: "rsla(238, 35%, 19%, 1)",
            75: "rsla(238, 35%, 19%, .75)",
            50: "rsla(238, 35%, 19%, .5)",
            25: "rsla(238, 35%, 19%, .25)",
            10: "rgba(238, 35%, 19%, 0.1)",
            5: "rsla(238, 35%, 19%, .05)",
            2: "rsla(238, 35%, 19%, .02)"
        }
    },
    viewport: {
        largeDevices: "990px",
        mediumDevices: "768px",
        smallDevices: "400px"
    },
    typography: {
        fontFamily: "Muli",
        fontWeight: {
            light: 300,
            regular: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
            xold: 800,
            black: 900
        },
        h1: {
            fontSize: {
                min: "21px",
                default: "",
                max: "60px"
            }
        }, 
        h2: {
            fontSize: {
                min: "2rem",
                default: "4vw", 
                max: "5rem"       
            }
        },
        h3: {
            fontSize: {
                min: "25px",
                default: "", 
                max: "30px"
            }
        }, 
        h4: {
            fontSize: {
                min: "15px",
                default: "", 
                max: "20px"
            }
        },
        h5: {
            fontSize: {
                min: "15px",
                default: "", 
                max: "20px"
            }
        },
        h6: {
            fontSize: {
                min: "15px",
                default: "", 
                max: "20px"
            }
        },
        p: {
            fontSize: {
                min: "1rem",
                default: ".75vw", 
                max: "1.25rem"
            }
        }
    }
}

export default theme;