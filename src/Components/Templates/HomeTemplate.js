import PropTypes from "prop-types";
import styled from "styled-components";
import HomeLayout from "../../Layouts/HomeLayout";
import home from "../../utils/contentPages/home.content";
import Goals from "../Organisms/Text/Goals";

const StyledSponsors = styled.div`

`;

const ImageWrapper = styled.div`


`;

const ListWrapper = styled.div`

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
            <br />
            <Goals goals={homeContent.goals} />

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
            img: PropTypes.shape({
                src: PropTypes.string,
                alt: PropTypes.string.isRequired,   
            }),
            points: PropTypes.object.isRequired
        }),
        goals: PropTypes.array.isRequired
    })
}

export default HomeTemplate
