import {useState} from "react"

function previousSlide(index, setIndex) {
    if (index === 0) return setIndex(2)

    return setIndex((i) => i - 1);
}

function nextSlide(index, setIndex) {
    if (index > 1) return setIndex(0) 
    
    return setIndex((i) => i + 1);
}

export default function useTestimonial(slides) {
    const [index, setIndex] = useState(0);

    const slidesArray = slides;
    const currentSlide = slidesArray[index];


    const onHandlePreviousSlide = (e) => {
        e.preventDefault();
        
        previousSlide(index, setIndex)
    }

    const onHandleNextSlide = (e) => {
        e.preventDefault();
        nextSlide(index, setIndex)
    }

    return {
        currentSlide,
        onHandleNextSlide,
        onHandlePreviousSlide,
    }
}