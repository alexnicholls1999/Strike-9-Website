import PropTypes from "prop-types";
import styled from "styled-components";
import leftArrow from "./../../assets/Testimonial/LeftArrow.svg"
import rightArrow from "./../../assets/Testimonial/RightArrow.svg"

const StyledNext = styled.div`
  right: 0;

  ::after {
    background-image: url(${rightArrow});
  }
`;

const StyledPrevious = styled.div`
  left: 0;

  ::after {
    background-image: url(${leftArrow});
  }
`;

const ArrowButtons = styled.div`
  position: absolute;
  bottom: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: 45px;
  box-shadow: 0px 0px 5px 0px hsla(240, 18%, 77%, 0.52);
  border-radius: 50px;
  background: white;
  overflow: hidden;
  z-index: 1;

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

  @media(min-width: ${({theme}) => theme.viewport.lg}) {
    bottom: 10%;
    left: 100%;
  }
`;

function TestimonialButton() {
    return (
        <ArrowButtons>
            <StyledNext />
            <StyledPrevious />
        </ArrowButtons>
    )
}

export default TestimonialButton
