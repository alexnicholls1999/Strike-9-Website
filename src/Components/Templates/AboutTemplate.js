import PropTypes from "prop-types";
import styled from "styled-components";
import MainLayout from "../../Layouts/MainLayout";

import Pattern from "../Atoms/Iconography/Pattern";
import Summary from "../Organisms/Summary";
import Topic from "../Organisms/Topic";

const StyledCoachingWrapper = styled.div`
    padding: 7em;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;

    background: grey;
    box-shadow: inset 0 0 0 100vmax rgb(5 10 43 / 40%);
`;

const StyledCoaching = styled.div`
    text-align: center;
    color: ${({theme}) => theme.colors.neutral[100]};

    h2 {
        color: ${({theme}) => theme.colors.neutral[100]};
    }
`


function AboutTemplate({aboutContent}) {
    return (
        <MainLayout
            content={{
                title: aboutContent.heroTitle,
                text: aboutContent.paragraph
            }}
        >
            <Pattern />

            <Summary content={{blurb: { title: aboutContent.summary.blurb.title, paragraph: aboutContent.summary.blurb.paragraph}, paragraph: aboutContent.summary.paragraph}}/>
        
            {aboutContent.benefits.map((benefit, index) => <Topic key={index} secondary={benefit.secondary} topic={{title: benefit.title, paragraph: benefit.paragraph, img: {src: benefit.img.src, alt: benefit.img.alt}}}/>)};
            
            <StyledCoachingWrapper>
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
        })
    })
}

export default AboutTemplate
