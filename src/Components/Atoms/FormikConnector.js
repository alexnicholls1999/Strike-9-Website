import { StepConnector } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";


export const FormikConnector = withStyles({
    active: {
        "& $line": {
            borderColor: "#5E3D83"
        }
    }, 
    completed: {
        "& $line": {
            borderColor: "#5E3D83"
        }
    },
    line: {
        borderColor: "#F1F1F1",
        borderTopWidth: 3,
        width: "75%",
        borderRadius: 10,
        margin: "0 auto"
    }
})(StepConnector);
