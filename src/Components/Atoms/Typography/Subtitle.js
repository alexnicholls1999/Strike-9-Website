import PropTypes from "prop-types";

export default function Subtitle({subtitle}) {
    return <h3>{subtitle}</h3>
}

Subtitle.propTypes = {
    subtitle: PropTypes.string
}

 
