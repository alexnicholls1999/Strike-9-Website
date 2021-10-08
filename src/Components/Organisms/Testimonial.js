import PropTypes from "prop-types";
import styled from "styled-components";
import Quote from "../Molecules/Quote";

const StyledTestimonialWrapper = styled.div`
    display: flex;
    flex-flow: column;
`;

const StyledBanner = styled.div`
    background: ${({theme}) => theme.colors.neutral[800]};

    h2 {
        color: ${({theme}) => theme.colors.neutral[100]};
    }
`;

const StyledTestimonial = styled.div`

`;

function Testimonial({title, quotes}) {
    return (
        <StyledTestimonialWrapper>
            <StyledBanner>
                <h2>{title}</h2>
            </StyledBanner>
            <StyledTestimonial>
                {quotes.map(({id, paragraph, name, rating}) => {
                    return <Quote key={id} quote={{message: paragraph, name: name, rating: rating}} />
                })}
            </StyledTestimonial>
        </StyledTestimonialWrapper>
    )
}

Testimonial.propTypes = {
    title: PropTypes.string.isRequired,
    quotes: PropTypes.object.isRequired
}

export default Testimonial
