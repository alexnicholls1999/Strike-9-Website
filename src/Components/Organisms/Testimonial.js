import React, {useState} from 'react';
import Slide from '../Molecules/Slide';
import Button from './../Atoms/Button';
import {Container, Row} from "react-bootstrap";

function Testimonial() {
    const [index, setIndex] = useState(0);
    const slides = [
        {
            id: 1,
            name: "Jade White",
            description: "Test test test",
            img: `https://image.shutterstock.com/image-photo/portrait-girl-thumbs-park-260nw-573105835.jpg`
        },
        {
            id: 2,
            name: "John Clarke",
            description: "Test test test",
            img: `https://image.shutterstock.com/z/stock-photo-little-boy-shooting-at-goal-517840018.jpg`
        },
        {
            id: 3,
            name: "Joe Young",
            description: "Test test test",
            img: `https://image.shutterstock.com/z/stock-photo-boys-kicking-football-on-the-sports-field-210359746.jpg`
        },
        {
            id: 4,
            name: "Adam Jackson",
            description: "Test test test",
            img: `https://image.shutterstock.com/image-photo/elementary-school-kids-playing-football-600w-667950280.jpg`
        },
        {
            id: 5,
            name: "Lucy Mayfleet",
            description: "Test test test",
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
            <Slide 
                id={currentSlide.id}
                name={currentSlide.name}
                description={currentSlide.description}
                img={currentSlide.img}
            />

            <br />

            
        </>
    )
}

export default Testimonial


