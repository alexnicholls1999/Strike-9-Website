import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../Molecules/Text/Section";

const StyledIndexSection = styled.div`

`;

const StyledIndexImage = styled.div`

`;

const StyledIndexText = styled.div`

`;


function Index({indexSection, alternate}) {
    return (
        <>
            <StyledIndexSection>
                <StyledIndexImage>
                    <img src={indexSection.img.src} alt={indexSection.img.alt} />
                </StyledIndexImage>
                <StyledIndexText>
                    <Section content={{title: indexSection.title, paragraph: indexSection.message}}/>
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
        title: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired
    })
}

export default Index
