import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../Molecules/Text/Section";

const StyledIndexSection = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: center;
    position: relative;
    flex-direction: column;

    @media (min-width: ${({theme}) => theme.viewport.md}){
        align-items: center;
        justify-content: center;
        position: relative;
        flex-direction: ${({alternate}) => (alternate ? "row-reverse" : "row")}
    }
`;

const StyledIndexImage = styled.div`
    width: 100%;
    img {
        width: 100%;
    }

    @media (min-width: ${({theme}) => theme.viewport.md}){
        width: 50%;
    }
`;

const StyledIndexText = styled.div`
    width: 100%;
    padding: 3rem 1rem;
 

    @media (min-width: ${({theme}) => theme.viewport.md}){
        width: 50%;
        padding: 5rem;

        p {
            width: 75%;
        }
    }
`;

function Index({indexSection, alternate}) {
    return (
        <>
            <StyledIndexSection alternate={alternate}>
                <StyledIndexImage>
                    <img src={indexSection.img.src} alt={indexSection.img.alt} />
                </StyledIndexImage>
                <StyledIndexText>
                    <Section content={{title: indexSection.title, paragraph: indexSection.message, button: {text: indexSection.button.text, onClick: indexSection.button.onClick}}} />
                </StyledIndexText>
            </StyledIndexSection>
        </>
    )
}

Index.propTypes = {
    alternate: PropTypes.bool,
    indexSection: PropTypes.shape({
        img: PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired
        }),
        button: PropTypes.shape({
            text: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired,
        }),
        title: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired
    })
}

export default Index
