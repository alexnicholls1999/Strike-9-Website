import PropTypes from "prop-types";
import HomeLayout from "../../Layouts/HomeLayout";
import Hero from "../Organisms/Hero";

function HomeTemplate({homeContent}) {
    return (
        <HomeLayout>
            <Hero 
                content={{
                    title: homeContent.heroTitle,
                    text: homeContent.paragraph
                }} 
            />
        </HomeLayout>
    )
}

HomeTemplate.propTypes = {
    homeContent: PropTypes.shape({
        heroTitle: PropTypes.string,
        paragraph: PropTypes.string
    })
}

export default HomeTemplate
