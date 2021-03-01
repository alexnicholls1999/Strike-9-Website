import React from 'react'
import useAnimate from "./../react-hooks/useAnimate";


function SlideInLeft({children}) {
    const {domRef, isVisible} = useAnimate()
    return (
        <div className={`slideInLeft ${isVisible && 'isVisible'}`} ref={domRef}>
            {children}
        </div>
    )
}

export default SlideInLeft;
