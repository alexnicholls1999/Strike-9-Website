import PropTypes from "prop-types";
import MainLayout from "../../Layouts/MainLayout";
import Search from "../Organisms/Search";

function EventsTemplate({eventsContent}) {
    return (
        <MainLayout 
            hero={{ content: { title: eventsContent.hero.title}}} 
            component={<Search />}
        >

        </MainLayout>    
    )
}

EventsTemplate.propTypes = {
    eventsContent: PropTypes.shape({
        hero: PropTypes.shape({
            title: PropTypes.string.isRequired
        }),
        search: PropTypes.shape({
            filters: PropTypes.array
        })
    })
}

export default EventsTemplate
