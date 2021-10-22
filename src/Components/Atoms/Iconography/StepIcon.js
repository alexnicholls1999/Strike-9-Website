import PropTypes from "prop-types";
import Check from "@material-ui/icons/Check";
import { Strike9StepIconStyles } from "../../../react-helpers/formHelpers";



function StepIcon({icon}) {

    const classes = Strike9StepIconStyles()

    return (
        <div className={icon.active ? `${classes.active}` : `${classes.root}`}>
            {icon.completed ? <Check className={`${classes.icon.completed}`} /> : <Check />}
        </div>
    )
}

StepIcon.propTypes = {
    icon: PropTypes.shape({
        active: PropTypes.bool,
        completed: PropTypes.bool
    })
}

export default StepIcon;
