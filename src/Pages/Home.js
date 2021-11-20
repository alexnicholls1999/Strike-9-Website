import { useContext } from "react";
import HomeTemplate from "../Components/Templates/HomeTemplate"
import { ContentContext } from "../utils/Context/ContentContext"


function Home({isAuthenticated, signOut}) {

    const content = useContext(ContentContext);

    const homeContent = {
        heroTitle: content.home.hero.title,
        paragraph: content.home.hero.paragraph,
        sponsorsImg: {
            src: content.home.panel.img.src,
            alt: content.home.panel.img.alt
        },
        trainingplans: {
            title: content.home.trainingplans.title,
            img: {
                src: content.home.trainingplans.img.src,
                alt: content.home.trainingplans.img.alt
            },
            points: content.home.trainingplans.list.points
        },
        goals: content.home.goals,
        feedback: {
            title: content.home.feedback.title,
            quotes: content.home.feedback.quotes
        },
        about: {
            title: content.home.about.title,
            paragraph: content.home.about.paragraph,
            img: {
                src: content.home.about.img.src,
                alt: content.home.about.img.alt,
            },
            button: {
                text: content.home.about.button.text
            }
        },
        index: content.home.index
    }

    return <HomeTemplate isAuthenticated={isAuthenticated} signOut={signOut} homeContent={homeContent} />
}

export default Home
