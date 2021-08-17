import PropTypes from "prop-types";

function Select({ options, onChange, onBlur, ...props}) {
    
    if (!Array.isArray(options) || options.length < 1) return null;
   
    return (
        <select className="form-select" onChange={onChange} onBlur={onBlur} {...props}>
            {options.map((option, index) => {
                const { value, name } = option;
                return <option key={index} value={value}>{name}</option>
            })}
        </select>
    )
}

Select.defaultProps = {
    onChange: () => {},
    onBlur: () => {}
}

Select.propTypes = {
    options: PropTypes.array,
    onChange: PropTypes.func,
    onBlur: PropTypes.func
}

export default Select;
