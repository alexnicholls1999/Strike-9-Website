import React from 'react'
import useAnimate from "./../react-hooks/useAnimate";


function FadeIn({children}) {
    const {domRef, isVisible} = useAnimate()

    return (
        <div className={`fadeIn ${isVisible && 'isVisible'}`} ref={domRef}>
            {children}
        </div>
    )
}

export default FadeIn
