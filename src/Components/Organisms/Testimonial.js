import PropTypes from "prop-types";
import styled from "styled-components";
import Quote from "../Molecules/Quote";

const StyledBanner = styled.div`

`;

const StyledTestimonial = styled.div`

`;

function Testimonial({title, quotes}) {
    return (
        <div>
            <StyledBanner>
                <h2>{title}</h2>
            </StyledBanner>
            <StyledTestimonial>
                {quotes.map(({id, paragraph, name, rating}) => {
                    return <Quote key={id} quote={{message: paragraph, name: name, rating: rating}} />
                })}
            </StyledTestimonial>
        </div>
    )
}

Testimonial.propTypes = {
    title: PropTypes.string.isRequired,
    quotes: PropTypes.object.isRequired
}

export default Testimonial
