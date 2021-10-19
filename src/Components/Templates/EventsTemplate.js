import PropTypes from "prop-types";
import MainLayout from "../../Layouts/MainLayout";
import Search from "../Organisms/Search";

function EventsTemplate() {
    return (
        <MainLayout hero={{
            content: {
                title: "SEARCH FOR STRIKE 9 VLU EVENTS"
            },
            component: Search
        }}>
            
        </MainLayout>    
    )
}

export default EventsTemplate
