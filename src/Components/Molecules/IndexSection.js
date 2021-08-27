import PropTypes from "prop-types";
import styled from "styled-components";
import Box from "../Atoms/Box";
import Button from "../Atoms/Buttons/Button";
import FadeIn from "./../../Animations/FadeIn";
import SlideInRight from "./../../Animations/SlideInRight";
import SlideInLeft from "./../../Animations/SlideInLeft";

const StyledIndexSection = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: center;
    position: relative;
    flex-direction: column;

    @media (min-width: ${({theme}) => theme.viewport.mediumDevices}){
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
    @media (min-width: ${({theme}) => theme.viewport.mediumDevices}){
        width: 50%;
    }
`
const StyledIndexText = styled.div`
    width: 100%;
    padding-left: 5%;
    padding-top: 10%;
    
    p {
        color: ${({theme}) => theme.colors.neutral.Black}
    }
    button {
        margin: 50px;
        width: 150px;
        float: right;
    }
    @media (min-width: ${({theme}) => theme.viewport.mediumDevices}){
        width: 50%;
        padding-top: 0;
        p {
            width: 75%;
        }
    }
`;

function IndexSection({indexProps, alternate, ...props}) {
    return (
        <>
          {!alternate ? (
            <FadeIn>
                <StyledIndexSection>
                    <StyledIndexImage>
                        <SlideInRight>
                            <img src={indexProps.src} alt={indexProps.alt}/>
                        </SlideInRight>
                    </StyledIndexImage>
                    <Box {...props}/>
                    <StyledIndexText>
                        <SlideInLeft>
                            <h2>{indexProps.title}</h2>
                            <p>{indexProps.message}</p>
                            <Button {...props} />                            
                        </SlideInLeft>
                    </StyledIndexText>
                </StyledIndexSection>
            </FadeIn>
          ) : (
            <FadeIn>
                <StyledIndexSection alternate={alternate}>
                    <StyledIndexImage>
                        <SlideInLeft>    
                            <img src={indexProps.src} alt={indexProps.alt}/>
                        </SlideInLeft>
                    </StyledIndexImage>
                    <Box {...props}/>
                    <StyledIndexText>
                        <SlideInRight>
                            <h2>{indexProps.title}</h2>
                            <p>{indexProps.message}</p>
                            <Button {...props} />                            
                        </SlideInRight>
                    </StyledIndexText>
                </StyledIndexSection>
            </FadeIn>
          )}  
        </>
    )
}

IndexSection.propTypes = {
    indexProps: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
        title: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired
    }),
    alternate: PropTypes.bool
}

export default IndexSection
