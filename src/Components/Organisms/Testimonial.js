import React from 'react';
import Slide from '../Molecules/Slide';
import styled from "styled-components";
import SliderButton from '../Atoms/SliderButton';
import imgJade from "./../../assets/Slider/image-jade.jpg";
import imgJohn from "./../../assets/Slider/image-john.jpg";
import imgTanya from "./../../assets/Slider/image-tanya.jpg";
import useTestimonial from '../../react-hooks/useTestimonial';

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
    const { currentSlide, onHandlePreviousSlide, onHandleNextSlide } = useTestimonial(slides);

    return (
        <>
            <Slider>
                <Slide 
                    id={currentSlide.id}
                    name={currentSlide.name}
                    description={currentSlide.description}
                    img={currentSlide.img}
                />

                <SliderButton onNextClick={onHandleNextSlide} onPreviousClick={onHandlePreviousSlide}/>
            </Slider>
        </>
    )
}

export default Testimonial;