import PropTypes from "prop-types";
import styled from "styled-components";
import Label from "../Atoms/Form/Label";
import Select from "../Atoms/Form/Select";

const StyledDropdown = styled.div`
    display: flex;
    flex-flow: column;
    padding: 0 .5rem;

    label {
        margin-bottom: .5rem;
    }
`;

function Dropdown({title, ...props}) {
    return (
        <StyledDropdown>
            <Label name={title} />
            <Select {...props} />  
        </StyledDropdown>
    )
}

export default Dropdown
