import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Check from "@material-ui/icons/Check";

const Strike9StepIconStyles = makeStyles({
    root: {
        color: "#eaeaf0",
        display: "flex",
        height: 22,
        alignItems: "center"
    },
    active: {
        color: "#6234D7",
        opacity: "100%"
    },
    completed: {
        color: "#6234D7",
        zIndex: 2,
        opacity: "100%"
    }
});

function StepIcon({active, completed}) {
    const classes = Strike9StepIconStyles();


    return (
        <div className={active ? `${classes.active}` : `${classes.root}`}>
            {completed ? <Check className={`${classes.completed}`} /> : <Check />}
        </div>
    )
}

StepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool
}

export default StepIcon;