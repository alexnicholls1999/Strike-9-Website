import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import HomeLayout from "../../Layouts/HomeLayout";
import home from "../../utils/contentPages/home.content";
import Index from "../Organisms/Index";
import Testimonial from "../Organisms/Testimonial";
import Goals from "../Organisms/Text/Goals";
import Topic from "../Organisms/Topic";

const StyledSponsors = styled.div`
    display: flex;
    justify-content: center;
    background: ${({theme}) => theme.colors.neutral[800]};
    padding: 3rem;
`;

const StyledTrainingplansTitle = styled.h2`

`;

const ListWrapper = styled.div`


`;

const ImageWrapper = styled.div`

`;

const List = styled.div`


`;

const Point = styled.div`

`;


function HomeTemplate({homeContent}) {
    return (
        <HomeLayout content={{
            title: homeContent.heroTitle,
            text: homeContent.paragraph
        }}>
            <StyledSponsors>
                    <img src={homeContent.sponsorsImg.src} alt={homeContent.sponsorsImg.alt} />
            </StyledSponsors>

            <Container fluid>            
                <StyledTrainingplansTitle>{homeContent.trainingplans.title}</StyledTrainingplansTitle>
        
                <ListWrapper>
                    <ImageWrapper>
                        <img src={homeContent.trainingplans.img.src} alt={homeContent.trainingplans.img.alt}/>
                    </ImageWrapper>
                    <List>
                        {homeContent.trainingplans.points.map(({title, paragraph, alternate}) => {
                            return (
                                <Point alternate={alternate}>
                                    <h3>{title}</h3>
                                    <p>{paragraph}</p>
                                </Point>
                            )
                        })}
                    </List>
                </ListWrapper>
            </Container>

            <Goals goals={homeContent.goals} />
            <Testimonial title={homeContent.feedback.title} quotes={homeContent.feedback.quotes} />
            <Topic 
                topic={{ 
                    img: { src: homeContent.about.img.src, alt: homeContent.about.img.alt },
                    title: homeContent.about.title,
                    paragraph: homeContent.about.paragraph
                }}
            />
            {homeContent.index.map(({alternate, img, title, paragraph}) => {
                return <Index indexSection={{title: title, message: paragraph, img: { src: img.src, alt: img.alt }}} />
            })}
        </HomeLayout>
    )
}

HomeTemplate.propTypes = {
    homeContent: PropTypes.shape({
        heroTitle: PropTypes.string,
        paragraph: PropTypes.string,
        sponsorsImg: PropTypes.shape({
            src: PropTypes.string,
            alt: PropTypes.string.isRequired,
        }),
        trainingplans: PropTypes.shape({
            title: PropTypes.string,
            img: PropTypes.shape({
                src: PropTypes.string,
                alt: PropTypes.string.isRequired,   
            }),
            points: PropTypes.object.isRequired
        }),
        goals: PropTypes.array.isRequired,
        feedback: PropTypes.shape({
            title: PropTypes.string.isRequired,
            quotes: PropTypes.object.isRequired
        }),
        about: PropTypes.shape({
            img: PropTypes.shape({
                src: PropTypes.string,
                alt: PropTypes.string.isRequired,
            }),
            title: PropTypes.string,
            paragraph: PropTypes.string,
        }),
        index: PropTypes.object.isRequired
    })
}

export default HomeTemplate
