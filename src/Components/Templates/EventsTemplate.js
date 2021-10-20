import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import MainLayout from "../../Layouts/MainLayout";
import Event from "../Organisms/Event";
import Search from "../Organisms/Search";

function EventsTemplate({eventsContent}) {
    return (
        <MainLayout 
            hero={{ content: { title: eventsContent.hero.title}}} 
            component={<Search />}
        >
            <Container fluid>
                <Event 
                    event={{
                        title: "Strike 9 VLU October School Sessions",
                        cost: "FREE",
                        type: "Girls Sessions",
                        age: "Ages 11 to 13",
                        date: "Tuesday 27th October",
                        time: "09:00 - 12:00",
                        description: "We take pride in our adaptability and believe we can impact every player, helping them reach their goals in and out of the world of Football."
                    }}
                />
                <Event 
                    event={{
                        title: "Strike 9 VLU October School Sessions",
                        cost: "FREE",
                        type: "Boys Sessions",
                        age: "Ages 11 to 13",
                        date: "Tuesday 27th October",
                        time: "09:00 - 12:00",
                        description: "We take pride in our adaptability and believe we can impact every player, helping them reach their goals in and out of the world of Football."
                    }}
                />
            </Container>

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
