import PropTypes from "prop-types";
import styled from "styled-components";

const StyledBox = styled.div`
    position: relative;
    z-index: 2;
    background-color: ${({theme}) => theme.colors.primary.RoyalPurple};
    height: 70px;
    width: 70px;
    padding: 25px;
    text-align: center;
    margin-top: -30px;
    margin-left: 10px;
    box-shadow: 0px 6px 18px 0px ${({theme}) => theme.colors.primary.RoyalPurple};
    
    @media (min-width: 768px){
        position: absolute;
        height: 75px;
        width: 75px;
        margin: 0 auto;
    }
`;

const StyledTitle = styled.h5`
    text-align: center;
    margin: 0 auto;
    font-size: 0.9rem;
    height: 2px;
    width: 15px;
    border-radius: 10px;
    box-shadow: 0 20px 0 0 rgb(255 255 255 / 30%);
    color: ${({theme}) => theme.colors.neutral.White};
`;

function Box({title}) {
    return (
        <StyledBox>
                <StyledTitle>{title}</StyledTitle>
        </StyledBox>
    )
}

Box.propTypes = {
    title: PropTypes.string.isRequired
}

export default Box;