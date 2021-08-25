import PropTypes from "prop-types";
import styled from "styled-components";
import useAnimate from "./../react-hooks/useAnimate";

const StyledFadeIn = styled.div`
  opacity: ${({ active }) => (active ? "1" : "0")};
  transform: ${({ active }) => (active ? "none" : "translateY(20vh)")};
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  transition: opacity 1200ms ease-out, transform 500ms ease-out,
    visibility 1200ms ease-out;
  will-change: opacity, transform, visibility;
`;

function FadeIn({children}) {
    const {domRef, isVisible} = useAnimate();

    return (
        <StyledFadeIn active={isVisible} ref={domRef}>
            {children}
        </StyledFadeIn>
    )
}

FadeIn.propTypes = {
    children: PropTypes.element.isRequired,
}


export default FadeIn;