import React, {useState} from 'react';
import Slide from '../Molecules/Slide';
import styled from "styled-components";
import SliderButton from '../Atoms/SliderButton';

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
            img: `https://image.shutterstock.com/image-photo/portrait-girl-thumbs-park-260nw-573105835.jpg`
        },
        {
            id: 2,
            name: "John Clarke",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis neque harum quis recusandae. Ipsa ex totam corporis officiis repellendus reiciendis, necessitatibus ut tempore nostrum beatae omnis, voluptas rem mollitia aperiam.",
            img: `https://image.shutterstock.com/z/stock-photo-little-boy-shooting-at-goal-517840018.jpg`
        },
        {
            id: 3,
            name: "Joe Young",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis neque harum quis recusandae. Ipsa ex totam corporis officiis repellendus reiciendis, necessitatibus ut tempore nostrum beatae omnis, voluptas rem mollitia aperiam.",
            img: `https://image.shutterstock.com/z/stock-photo-boys-kicking-football-on-the-sports-field-210359746.jpg`
        },
        {
            id: 4,
            name: "Adam Jackson",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis neque harum quis recusandae. Ipsa ex totam corporis officiis repellendus reiciendis, necessitatibus ut tempore nostrum beatae omnis, voluptas rem mollitia aperiam.",
            img: `https://image.shutterstock.com/image-photo/elementary-school-kids-playing-football-600w-667950280.jpg`
        },
        {
            id: 5,
            name: "Lucy Mayfleet",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis neque harum quis recusandae. Ipsa ex totam corporis officiis repellendus reiciendis, necessitatibus ut tempore nostrum beatae omnis, voluptas rem mollitia aperiam.",
            img: `https://image.shutterstock.com/image-photo/portrait-smiling-teen-girl-football-600w-1421155703.jpg`
        }
    ];
    const slidesArray = slides;
    const currentSlide = slidesArray[index];


    const previousSlide = (e) => {
        e.preventDefault();
        
        if (index === 0) {
            setIndex(4);
        } else {
            setIndex((i) => i - 1);
        }
    }

    const nextSlide = (e) => {
        e.preventDefault();

        if (index > 3) {
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