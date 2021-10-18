import PropTypes from "prop-types";
import MainLayout from "../../Layouts/MainLayout";
import Pattern from "../Atoms/Iconography/Pattern";
import Summary from "../Organisms/Summary";
import Topic from "../Organisms/Topic";

function TrainingTemplate({trainingContent}) {
    return (
        <MainLayout
            hero={{
                content: {
                    title: trainingContent.heroTitle,
                    text: trainingContent.paragraph
                }
            }}
        >
            <Summary content={{blurb: { title: trainingContent.kidsDevelopmentSummary.blurb.title, paragraph: trainingContent.kidsDevelopmentSummary.blurb.paragraph}, paragraph: trainingContent.kidsDevelopmentSummary.paragraph}}/>
        
            {trainingContent.kidsDevs.map((kidsDev, index) => <Topic key={index} secondary={kidsDev.secondary} topic={{title: kidsDev.title, paragraph: kidsDev.paragraph, img: {src: kidsDev.img.src, alt: kidsDev.img.alt}, button: {active: false}}}/>)}

            <Summary content={{blurb: { title: trainingContent.communitySummary.blurb.title, paragraph: trainingContent.communitySummary.blurb.paragraph}, paragraph: trainingContent.communitySummary.paragraph}}/>
           
            {trainingContent.communities.map((community, index) => <Topic key={index} secondary={community.secondary} topic={{title: community.title, paragraph: community.paragraph, img: {src: community.img.src, alt: community.img.alt}, button: {active: false}}}/>)}
        </MainLayout>
    )
}

TrainingTemplate.propTypes = {
    trainingContent: PropTypes.shape({
        heroTitle: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        kidsDevelopmentSummary: PropTypes.shape({
            blurb: PropTypes.shape({
                title: PropTypes.string.isRequired,
                paragraph: PropTypes.string.isRequired
            }),
            paragraph: PropTypes.string.isRequired
        }),
        kidsDevs: PropTypes.array.isRequired,
        communitySummary: PropTypes.shape({
            blurb: PropTypes.shape({
                title: PropTypes.string.isRequired,
                paragraph: PropTypes.string.isRequired
            }),
            paragraph: PropTypes.string.isRequired
        }),
        communities: PropTypes.array.isRequired,
    })
}

export default TrainingTemplate
