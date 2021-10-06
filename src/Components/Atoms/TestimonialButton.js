import PropTypes from "prop-types";
import styled from "styled-components";
import LeftArrow from "./../../assets/Slider/icon-prev.svg";
import RightArrow from "./../../assets/Slider/icon-next.svg";

const StyledNext = styled.div`
  right: 0;

  ::after {
    background-image: url(${RightArrow});
  }
`;

const StyledPrevious = styled.div`
  left: 0;

  ::after {
    background-image: url(${LeftArrow});
  }
`;

const ArrowButtons = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 250px;
  width: 90px;
  height: 45px;
  box-shadow: 0px 0px 5px 0px hsla(240, 18%, 77%, 0.52);
  border-radius: 50px;
  background: white;
  overflow: hidden;

  @media (max-width: 400px) {
    top: 250px !important;
  }

  ${StyledNext}, ${StyledPrevious} {
    display: inline-block;
    width: 50%;
    height: 100%;
    position: absolute;
    cursor: pointer;

    &:after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;

function TestimonialButton({ onNextClick, onPreviousClick }) {
    
  return (
    <ArrowButtons>
      <StyledNext onClick={onNextClick} />
      <StyledPrevious onClick={onPreviousClick} />
    </ArrowButtons>
  );
}

TestimonialButton.propTypes = {
    onNextClick: PropTypes.func.isRequired,
    onPreviousClick: PropTypes.func.isRequired,
}

export default TestimonialButton;