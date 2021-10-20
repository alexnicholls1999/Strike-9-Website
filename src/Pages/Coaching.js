import {useContext} from 'react';
import CoachingTemplate from '../Components/Templates/CoachingTemplate';
import {ContentContext} from "../utils/Context/ContentContext";



function Coaching() {
    const content = useContext(ContentContext);

    const coachingContent = {
        heroTitle: content.coaching.hero.title, 
        paragraph: content.coaching.hero.paragraph,
        summary: {
            blurb: {
                title: content.coaching.summary.blurb.title,
                paragraph: content.coaching.summary.blurb.paragraph,
            },
            paragraph: content.coaching.summary.paragraph,
        },
        coaches: content.coaching.coaches
    }

    return <CoachingTemplate coachingContent={coachingContent} />
}

export default Coaching
