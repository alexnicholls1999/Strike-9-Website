import { useContext } from 'react'
import TrainingTemplate from '../Components/Templates/TrainingTemplate'
import { ContentContext } from '../utils/Context/ContentContext'

function Training() {

    const content = useContext(ContentContext);

    const trainingContent = {
        heroTitle: content.training.hero.title,
        paragraph: content.training.hero.paragraph,
        kidsDevelopmentSummary: {
            blurb: {
                title: content.training.kidsDevelopmentSummary.blurb.title,
                paragraph: content.training.kidsDevelopmentSummary.blurb.paragraph
            },
            paragraph: content.training.kidsDevelopmentSummary.paragraph
        },
        kidsDevs: content.training.kidsDevelopment,
        communitySummary: {
            blurb: {
                title: content.training.communitySummary.blurb.title,
                paragraph: content.training.communitySummary.blurb.paragraph
            },
            paragraph: content.training.communitySummary.paragraph
        },
        communities: content.training.communities,
    }

    return <TrainingTemplate trainingContent={trainingContent} />
}

export default Training
