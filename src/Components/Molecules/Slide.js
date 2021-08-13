import PropTypes from "prop-types"
import styled from "styled-components";
import PatternBg from "../../assets/Slider/pattern-bg.svg";
import PatternQuotes from "../../assets/Slider/pattern-quotes.svg";

const StyledSlide = styled.div`
    width: 100%;
    padding: 10px; 
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
    @media(min-width: 768px) {
        flex-direction: row !important;
        text-align: left !important;
    }
`;

const SlideText = styled.div`
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url(${PatternQuotes});
    background-position: top right;
    background-repeat: no-repeat;
    background-size: 80px;
    p {
        font-weight: 300;
        font-size: 1.1rem;
        line-height: 1rem;
        color: hsl(240, 38%, 20%);
    }
    h5 {
        color: #545454;
        margin-top: 20px;
        font-size: 1rem;
        font-weight: 800;
        text-align: left;
        text-transform: uppercase;
    }

    @media (max-width: 400px) {
        padding-top: 65px;
    }

    @media(min-width: 768px) {
        background-position: 10% 30% !important;
        background-size: 100px !important;
        align-items: flex-start !important;
        h5 {
            text-align: left;
        }
    }
    
`;

const SlideImage = styled.div`
    width: 100%;
    margin: 0 auto;
    height: 100%;
    padding: 40px;
    background-image: url(${PatternBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    img {
        height: 100%;
        width: 300px;
        margin: -20px;
        transform: skew(-2.5deg);
        box-shadow: 0 5px 29px 0 hsla(240, 18%, 77%, 0.52);
            
        @media (max-width: 400px) {
            width: 200px !important;
        }
    }
    @media (min-width: 768px) {
        margin-left: -100px !important;
        z-index: -1 !important;
    }
`;

function Slide({ name, description, img }) {

    return (
        <StyledSlide>
            <SlideText>
                <p>{description}</p>
                <h5>{name}</h5>
            </SlideText>
            <SlideImage>
                <img src={img} alt={name}/>
            </SlideImage>
        </StyledSlide>
    )
}

Slide.defaultProps = {
    name: '',
    description: '',
    img: ''
}

Slide.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string
}

export default Slide