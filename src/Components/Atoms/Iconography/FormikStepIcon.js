import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Check from "@material-ui/icons/Check";
import clsx from "clsx";

const Strike9StepIconStyles = makeStyles({
    root: {
        color: "#eaeaf0",
        display: "flex",
        height: 22,
        alignItems: "center"
    }, 
    active: {
        color: "#5e3d83",
        opacity: "100%"    
    },
    completed: {
        color: "#5E3D83",
        zIndex: 1,
        opacity: "100%"
    }
});

function FormikStepIcon({active, completed}) {
    const classes = Strike9StepIconStyles();
    
    return (
        <div className={clsx(classes.root, {
            [classes.active]: active
        })}>
            {completed ? <Check className={classes.completed}/> : <Check />}
        </div>
    )
}

FormikStepIcon.defaultProps = {
    active: false,
    completed: false,
}

FormikStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool
}



export default FormikStepIcon;