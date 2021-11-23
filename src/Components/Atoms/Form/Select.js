import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledSelect = styled.select`
    color: ${({theme}) => theme.colors.neutral[900]};
    font-size: 1.05rem;
    border: 1px solid ${({theme}) => theme.colors.neutral[300]};
    background-color: ${({theme}) => theme.colors.neutral[100]};
    padding: 0.35rem;
    border-radius: .25rem;

    &:focus {
        outline: none !important;
        border: 2px solid ${({theme}) => theme.colors.primary[600]};
    }

    ${({form}) => form && css`
        width: 100%;
        border-radius: 0.1rem;
        border: 1px solid ${({theme}) => theme.colors.neutral[200]};
        font-size: 0.85rem;
        font-weight: ${({theme}) => theme.typography.fontWeight.semiBold};
        padding: 0.5rem;
        color: ${({theme}) => theme.colors.neutral[300]};

        &:focus {
            outline: none !important;
            color: ${({theme}) => theme.colors.neutral[900]};
            border: 2px solid ${({theme}) => theme.colors.primary[600]};
        }
    `}
`;

function Select({select, form, options, ...props}) {

    if (!Array.isArray(options) || options.length < 1) return null;

    return (
        <>
            <StyledSelect form={form} {...props}>
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
 