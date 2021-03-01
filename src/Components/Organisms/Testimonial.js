import React, {useState} from 'react';
import Slide from '../Molecules/Slide';
import styled from "styled-components";
import SliderButton from '../Atoms/SliderButton';
import imgJade from "./../../assets/Slider/image-jade.jpg";
import imgJohn from "./../../assets/Slider/image-john.jpg";
import imgTanya from "./../../assets/Slider/image-tanya.jpg";

const Slider = styled.div`
    display: block;
    height: 100%;
    width: 100%;
    max-width: 850px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
`;


function Testimonial() {
    const [index, setIndex] = useState(0);
    const slides = [
        {
            id: 1,
            name: "Jade Francis",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis neque harum quis recusandae. Ipsa ex totam corporis officiis repellendus reiciendis, necessitatibus ut tempore nostrum beatae omnis, voluptas rem mollitia aperiam.",
            img: imgJade
        },
        {
            id: 2,
            name: "John Clarke",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis neque harum quis recusandae. Ipsa ex totam corporis officiis repellendus reiciendis, necessitatibus ut tempore nostrum beatae omnis, voluptas rem mollitia aperiam.",
            img: imgJohn
        },
        {
            id: 3,
            name: "Tanya Young",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis neque harum quis recusandae. Ipsa ex totam corporis officiis repellendus reiciendis, necessitatibus ut tempore nostrum beatae omnis, voluptas rem mollitia aperiam.",
            img: imgTanya
        } 
    ];
    const slidesArray = slides;
    const currentSlide = slidesArray[index];


    const previousSlide = (e) => {
        e.preventDefault();
        
        if (index === 0) {
            setIndex(2);
        } else {
            setIndex((i) => i - 1);
        }
    }

    const nextSlide = (e) => {
        e.preventDefault();

        if (index > 1) {
            setIndex(0);
        } else {
            setIndex((i) => i + 1);
        }
    }

    return (
        <>
            <Slider>
                <Slide 
                    id={currentSlide.id}
                    name={currentSlide.name}
                    description={currentSlide.description}
                    img={currentSlide.img}
                />

                <SliderButton onNextClick={nextSlide} onPreviousClick={previousSlide}/>
            </Slider>
        </>
    )
}

export default Testimonial;