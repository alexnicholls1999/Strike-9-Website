import PropTypes from "prop-types";
import styled from "styled-components";
import useAnimate from "./../react-hooks/useAnimate";

function SlideInRight({children}) {
    const {domRef, isVisible} = useAnimate();

    return (
      <div className={`slideInRight ${isVisible && 'isVisible'}`} ref={domRef}>
          {children}
      </div>
    )
}

SlideInRight.propTypes = {
    children: PropTypes.element.isRequired,
}


export default SlideInRight;