import PropTypes from "prop-types";

function Select({select, options, ...props}) {

    if (!Array.isArray(options) || options.length < 1) return null;

    return (
        <>
            <select className="form-select" {...props}>
                {options.map(({value, name}, index) => <option key={index} value={value}>{name}</option>)}
            </select>
        </>
    )
}

Select.propTypes = {
    select: PropTypes.shape({
        onChange: PropTypes.func,
        onBlur: PropTypes.func,
    }),
    options: PropTypes.array.isRequired
}

export default Select;
 