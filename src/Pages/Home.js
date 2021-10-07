import { useContext } from "react";
import HomeTemplate from "../Components/Templates/HomeTemplate"
import { ContentContext } from "../utils/Context/ContentContext"


function Home() {

    const content = useContext(ContentContext);

    return (
        <HomeTemplate 
            homeContent={{
                heroTitle: content.home.hero.title,
                paragraph: content.home.hero.paragraph,
                sponsorsImg: {
                    src: content.home.panel.img.src,
                    alt: content.home.panel.img.alt
                },
                trainingplans: {
                    img: {
                        src: content.home.trainingplans.img.src,
                        alt: content.home.trainingplans.img.alt
                    },
                    points: content.home.trainingplans.list.points
                },
                goals: content.home.goals
            }}
        />
    )
}

export default Home
