import PropTypes from "prop-types";
import styled from "styled-components";
import Next from "./../../../assets/Slider/icon-next.svg";
import Previous from "./../../../assets/Slider/icon-prev.svg";

const StyledNext = styled.div`
    right: 0;
    
    ::after {
        background-image: url(${Next});
    }
`;

const StyledPrevious = styled.div`
    left: 0;
    ::after {
        background-image: url(${Previous});
    }
`;

const ArrowButtons = styled.div` 
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 300px;
    width: 90px;
    height: 45px;
    box-shadow: -20px 12px 20px 0px hsla(240, 18%, 77%, 0.52);
    border-radius: 50px;
    background: white;
    overflow: hidden;
    
    @media(max-width: 400px) {
        top: 200px !important;
    }

    ${StyledNext}, ${StyledPrevious} {
        display: inline-block;
        width: 50%;
        height: 100%;
        position: absolute;
        cursor: pointer;
        &:after {
            content: '';
            position: absolute;
            height: 100%;
            width: 100%;
            background-repeat: no-repeat;
            background-position: center;
    
        }
    }
`;


function SliderButton({onNextClick, onPreviousClick}) {
    return (
        <ArrowButtons>
            <StyledNext onClick={onNextClick}/>
            <StyledPrevious onClick={onPreviousClick}/> 
        </ArrowButtons>
    )
}

SliderButton.defaultProps = {
    onNextClick: () => {},
    onPreviousClick: () => {}
}

SliderButton.propTypes = {
    onNextClick: PropTypes.func.isRequired,
    onPreviousClick: PropTypes.func.isRequired
}

export default SliderButton;