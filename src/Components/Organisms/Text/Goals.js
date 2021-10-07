import PropTypes from "prop-types";
import Goal from "../../Molecules/Text/Goal";

function Goals({goals}) {
    return (
        <>
            {goals.map(({title, paragraph}) => {
                return <Goal goal={{title: title, paragraph: paragraph}} />
            })}
        </>
    )
}

Goals.propTypes = {
    goals: PropTypes.array.isRequired
}

export default Goals
