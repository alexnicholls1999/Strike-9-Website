import PropTypes from "prop-types";

function Select({ options, defaultValue, defaultName, handleChange, style}) {

    if (!Array.isArray(options) || options.length < 1) return null;

    return (
        <select style={style} className="form-control" name={defaultName} value={defaultValue} onChange={handleChange}>
            {options.map((option, index) => {
                const { value, name } = option;
                return (
                    <option key={index} value={value}>{name}</option>
                )
            })}
        </select>
    )
}

Select.defaultProps = {
    options: [],
    defaultValue: '',
    defaultName: '',
    style: '',
    handleChange: () => {}
}

Select.propTypes = {
    options: PropTypes.array,
    defaultValue: PropTypes.string.isRequired,
    defaultName: PropTypes.string.isRequired,
    style: PropTypes.string,
    handleChange: PropTypes.func
}

export default Select