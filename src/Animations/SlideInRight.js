import React from 'react'
import useAnimate from "./../react-hooks/useAnimate";


function SlideInRight({children}) {
    const {domRef, isVisible} = useAnimate()
    return (
        <div className={`slideInRight ${isVisible && 'isVisible'}`} ref={domRef}>
            {children}
        </div>
    )
}

export default SlideInRight;
