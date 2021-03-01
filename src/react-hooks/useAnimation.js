import {useEffect, useState, useRef} from "react";


export default function useAnimate(){
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    setVisible(entry.isIntersecting);
                    observer.unobserve(domRef.current);
                }
            
                observer.observe(domRef.current);
            })
        })
    });


    return {
        domRef,
        isVisible
    }
}