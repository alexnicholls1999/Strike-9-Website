import PropTypes from "prop-types";
import styled from "styled-components";
import useAnimate from "./../react-hooks/useAnimate";

function SlideInLeft({children}) {
    const {domRef, isVisible} = useAnimate();

    return (
        <div className={`slideInLeft ${isVisible && 'isVisible'}`} ref={domRef}>
            {children}
        </div>
    )
}

SlideInLeft.propTypes = {
    children: PropTypes.element.isRequired,
}


export default SlideInLeft;