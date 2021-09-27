import PropTypes from "prop-types";
import styled from "styled-components";
import Box from "../Atoms/Box";
import Button from "../Atoms/Form/Button";

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
        border-radius: 0;
    }
    @media (min-width: ${({theme}) => theme.viewport.md}){
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
    @media (min-width: ${({theme}) => theme.viewport.md}){
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
            <StyledIndexSection>
                <StyledIndexImage>
                        <img src={indexProps.src} alt={indexProps.alt}/>
                </StyledIndexImage>
                <Box {...props}/>
                <StyledIndexText>
                        <h2>{indexProps.title}</h2>
                        <p>{indexProps.message}</p>
                        <Button {...props} />      
                </StyledIndexText>
            </StyledIndexSection>
          ) : (
            <StyledIndexSection alternate={alternate}>
                <StyledIndexImage>
                        <img src={indexProps.src} alt={indexProps.alt}/>
                </StyledIndexImage>
                <Box {...props}/>
                <StyledIndexText>
                        <h2>{indexProps.title}</h2>
                        <p>{indexProps.message}</p>
                        <Button {...props} />   
                </StyledIndexText>
            </StyledIndexSection>
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