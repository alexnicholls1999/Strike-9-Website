import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as faStarRegular} from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons/faStar";

const StyledStar = styled(FontAwesomeIcon)`
    color: ${({theme}) => theme.colors.primary[500]};

`

function Star({active}) {
    return (
        <>
            <StyledStar icon={active ? faStarSolid : faStarRegular} />
        </>
    )
}

export default Star
