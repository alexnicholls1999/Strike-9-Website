import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSelect = styled.select`
    font-size: 15px;
    padding: 10px;
    width: 100%;
    border-radius: 3px;
    border: 1px solid #F4F4F4;
    display: block;

    @media(min-width: 768px){
        width: 350px;
    }
`;


function Select({ options, onChange, onBlur, ...props}) {
    
    if (!Array.isArray(options) || options.length < 1) return null;
   
    return (

        <>
            <StyledSelect onChange={onChange} onBlur={onBlur} {...props}>
                {options.map((option, index) => {
                    const { value, name } = option;
                    return <option key={index} value={value}>{name}</option>
                })}
            </StyledSelect>
        </>

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
