import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function Symbol({symbol}) {

    return (
        <FontAwesomeIcon className="fab px-2" size="3x" icon={symbol} />
    )
}

Symbol.propTypes = {
    icon: PropTypes.object.isRequired,
    symbol: PropTypes.object.isRequired
}

export default Symbol;
