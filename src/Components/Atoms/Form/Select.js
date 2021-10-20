import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSelect = styled.select`
    color: ${({theme}) => theme.colors.neutral[900]};
    font-size: 1.05rem;
    border: 2px solid ${({theme}) => theme.colors.neutral[300]};
    padding: 0.35rem;
    border-radius: .25rem;
`;

function Select({select, options, ...props}) {

    if (!Array.isArray(options) || options.length < 1) return null;

    return (
        <>
            <StyledSelect {...props}>
                {options.map(({value, name}, index) => <option key={index} value={value}>{name}</option>)}
            </StyledSelect>
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
 