import { useRef } from "react";
import gsap from "gsap";
import { useIntersection } from "react-use";

export default function useFadeIn(){
    
    const sectionRef = useRef(null);

    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: "1200px",
        threshold: 1
    })

    const fadeIn = element => {
        gsap.to(element, 1, {
            autoAlpha: 1,
            opacity: 1,
            ease: "power4.out",
        });
    };

    const fadeOut = element => {
        gsap.to(element, 1, {
            autoAlpha: 0,
            opacity: 0,
            ease: "power4.out",
        })
    };
    
    intersection && intersection.isIntersecting
        ? fadeIn(".fadeIn")
        : fadeOut(".fadeIn");

    return {
        sectionRef
    }
}