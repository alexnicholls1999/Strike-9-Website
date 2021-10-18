import PropTypes from "prop-types";
import { useHistory } from "react-router";
import styled from "styled-components";
import MainLayout from "../../Layouts/MainLayout";

import Pattern from "../Atoms/Iconography/Pattern";
import ImageGallery from "../Organisms/ImageGallery";
import Summary from "../Organisms/Summary";
import Topic from "../Organisms/Topic";

const StyledCoachingWrapper = styled.div`
    padding: min(10rem, 15vh);
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background: ${({bgImage}) => `url(${bgImage}) no-repeat center center`};
    background-size: cover;
    box-shadow: inset 4px 1px 0px 100vmax rgb(2 4 18 / 64%);
    cursor: pointer;

`;

const StyledCoaching = styled.div`
    text-align: center;
    color: ${({theme}) => theme.colors.neutral[100]};

    h2 {
        color: ${({theme}) => theme.colors.neutral[100]};
    }

`;


function AboutTemplate({aboutContent}) {

    const history = useHistory()

    return (
        <MainLayout
            hero={{
                content: {
                    title: aboutContent.heroTitle,
                    text: aboutContent.paragraph
                }
            }}
        >
            <Summary content={{blurb: { title: aboutContent.summary.blurb.title, paragraph: aboutContent.summary.blurb.paragraph}, paragraph: aboutContent.summary.paragraph}}/>
        
            <ImageGallery images={aboutContent.gallery}/>

            <div className="p-4"></div>

            {aboutContent.benefits.map((benefit, index) => <Topic key={index} secondary={benefit.secondary} topic={{title: benefit.title, paragraph: benefit.paragraph, img: {src: benefit.img.src, alt: benefit.img.alt}, button: {active: false}}}/>)}
            
            <StyledCoachingWrapper bgImage={aboutContent.coaching.bgImage} onClick={() => history.push(`${aboutContent.coaching.link}`)}>
                <StyledCoaching>
                    <h6>Discover</h6>
                    <h2>COACHING</h2>
                </StyledCoaching>
            </StyledCoachingWrapper>
        
        </MainLayout>
    )
}

AboutTemplate.propTypes = {
    aboutContent: PropTypes.shape({
        heroTitle: PropTypes.string,
        paragraph: PropTypes.string,
        summary: PropTypes.shape({
            blurb: PropTypes.shape({
                title: PropTypes.string.isRequired,
                paragraph: PropTypes.string.isRequired
            }),
            paragraph: PropTypes.string.isRequired
        }),
        gallery: PropTypes.object.isRequired,
        benefits: PropTypes.array.isRequired,
        coaching: PropTypes.shape({
            bgImage: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired
        })
    })
}

export default AboutTemplate
