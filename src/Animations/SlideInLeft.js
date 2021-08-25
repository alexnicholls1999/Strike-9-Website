import PropTypes from "prop-types";
import styled from "styled-components";
import useAnimate from "./../react-hooks/useAnimate";

const StyledSlideInLeft = styled.div`
  opacity: ${({ active }) => (active ? "1" : "0")};
  transform: ${({ active }) => (active ? "translateX(0)" : "translateX(0)")};
  display: ${({ active }) => (active ? "block" : "none")};
  transition: transform 400ms ease-in;

  @media(min-width: 768px) {
    transform: ${({ active }) => (active ? "translateX(-50%)" : "translateX(0)")};
  }
`;


function SlideInLeft({children}) {
    const {domRef, isVisible} = useAnimate();

    return (
        <StyledSlideInLeft active={isVisible} ref={domRef}>
            {children}
        </StyledSlideInLeft>
    )
}

SlideInLeft.propTypes = {
    children: PropTypes.element.isRequired,
}


export default SlideInLeft;