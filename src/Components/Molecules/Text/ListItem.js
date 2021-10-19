import PropTypes from "prop-types";
import styled from "styled-components";

const StyledListItem = styled.li`
  font-size: 1rem;
  padding: 1rem 0;
`;

function ListItem({name}) {
    return (
        <StyledListItem>{name}</StyledListItem>
    )
}

export default ListItem;
