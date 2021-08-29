import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function Symbol({symbol}) {

    return (
        <FontAwesomeIcon className="fab" size="3x" icon={symbol} />
    )
}

Symbol.propTypes = {
    symbol: PropTypes.object.isRequired
}

export default Symbol;
