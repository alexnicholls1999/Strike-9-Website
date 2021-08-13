import PropTypes from 'prop-types';
import Select from '../Atoms/Forms/Select';

function Dropdown({text, value, handleChange, name, style, ...props}) {
    return (
        <>
            <label>{text}</label>

            <Select style={style} value={value} defaultName={name} handleChange={handleChange} {...props}/>   
        </>
    )
}

Dropdown.defaultProps = {
    text: '',
    value: '',
    name: '',
    style: '',
    handleChange: () => {}
}

Dropdown.propTypes = {
    text: PropTypes.string,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    style: PropTypes.string,
    handleChange: PropTypes.func
}

export default Dropdown;
