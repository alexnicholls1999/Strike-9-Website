import PropTypes from "prop-types";
import styled from "styled-components";

import Container from "./../../Grid/Container";
import HomeLayout from "../../Layouts/HomeLayout";
import home from "../../utils/contentPages/home.content";
import Index from "../Organisms/Index";
import Testimonial from "../Organisms/Testimonial";
import Goals from "../Organisms/Text/Goals";
import Topic from "../Organisms/Topic";

const StyledSponsors = styled.div`
    display: flex;
    flex-flow: row;
    background: ${({theme}) => theme.colors.neutral[800]};
    padding: 3rem;

    img {
        margin-inline: auto;
    }
`;

const StyledTrainingplansTitle = styled.h2`
    padding: 3rem 0;

    @media(min-width: ${({theme}) => theme.viewport.md}){
        text-align: right;
    }
`;

const ListWrapper = styled.div`
    display: flex;
    flex-flow: column;
    position: relative;

    @media(min-width: ${({theme}) => theme.viewport.md}){
        flex-flow: row;

        h2 {
            text-align: right;
        }
    }

`;

const ImageWrapper = styled.div`
    height: 100%;
    width: 100%;

`;

const List = styled.div`
    position: relative;
    width: 100%;


`;

const Point = styled.div`
    display: flex;
    flex-flow: column;
    align-items: self-start;
    height: 50%;
    width: 100%;
    padding: 2rem 0;

    @media(min-width: ${({theme}) => theme.viewport.md}){
        text-align: ${({alternate}) => alternate && "right"};
        align-items: ${({alternate}) => alternate && "self-end"};
        padding: 0;

        p {
            width: 50%;
        }
    }
`;


function HomeTemplate({homeContent}) {
    return (
        <HomeLayout content={{
            title: homeContent.heroTitle,
            text: homeContent.paragraph
        }}>
            <StyledSponsors>
                <Container>
                    <img src={homeContent.sponsorsImg.src} alt={homeContent.sponsorsImg.alt} />
                </Container>
            </StyledSponsors>

            <Container>
                <StyledTrainingplansTitle>{homeContent.trainingplans.title}</StyledTrainingplansTitle>
            </Container>        

            <Container>
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
            <br />
            <Goals goals={homeContent.goals} />
            <br />
            <Testimonial title={homeContent.feedback.title} quotes={homeContent.feedback.quotes} />
            <br />
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
