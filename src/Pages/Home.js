import { useContext } from "react";
import HomeTemplate from "../Components/Templates/HomeTemplate"
import { ContentContext } from "../utils/Context/ContentContext"


function Home() {

    const content = useContext(ContentContext);

    return (
        <HomeTemplate 
            homeContent={{
                heroTitle: content.home.hero.title,
                paragraph: content.home.hero.paragraph
            }}
        />
    )
}

export default Home
