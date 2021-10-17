import PropTypes from "prop-types";
import MainLayout from "../../Layouts/MainLayout";

import Pattern from "../Atoms/Iconography/Pattern";
import Topic from "../Organisms/Topic";
import Summary from "../Organisms/Summary";

function CoachingTemplate({coachingContent}) {
    return (
        <MainLayout content={{
            title: coachingContent.heroTitle,
            text: coachingContent.paragraph
        }}>
            <Pattern />

            <Summary content={{blurb: { title: coachingContent.summary.blurb.title, paragraph: coachingContent.summary.blurb.paragraph}, paragraph: coachingContent.summary.paragraph}}/>

            {coachingContent.coaches.map((coach, index) => <Topic key={index} secondary={coach.secondary} topic={{title: coach.title, paragraph: coach.paragraph, img: {src: coach.img.src, alt: coach.img.alt}, button: {active: false}}}/>)}

        </MainLayout>
    )
}

CoachingTemplate.propTypes = {
    coachingContent: PropTypes.shape({
        heroTitle: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        summary: PropTypes.shape({
            blurb: PropTypes.shape({
                title: PropTypes.string.isRequired,
                paragraph: PropTypes.string.isRequired
            }),
            paragraph: PropTypes.string.isRequired
        }),
        coaches: PropTypes.array.isRequired,
    })
}

export default CoachingTemplate
