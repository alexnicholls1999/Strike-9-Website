import PropTypes from "prop-types";
import {Container, Row, Col} from "react-bootstrap";
import Dropdown from "./../Molecules/Dropdown";

function Search({search}) {

    const filters = [
        {
            title: "Date",
            name: "date",
            config: {
                value: search.filters.date,
                options: [
                    {
                        name: "Any"
                    },
                    {
                        name: "17th October 2020"
                    },
                    {
                        name: "20th October 2020"
                    },
                    {
                        name: "27th October 2020"
                    }
                ],
                onChange: search.handleFilters.handleDateChange
            }
        },
        {
            title: "Time",
            name: "time",
            config: {
                value: search.filters.time,
                options: [
                    {
                        name: "Any"
                    },
                    {
                        name: "09:00 - 12:00"
                    },
                    {
                        name: "12:00 - 14:00"
                    },
                    {
                        name: "14:00 - 16:00"
                    } 
                ],
                onChange: search.handleFilters.handleTimeChange
            }
        },
        {
            title: "Type",
            name: "type",
            config: {
                value: search.filters.type,
                options: [
                    {
                        name: "Any"
                    },
                    {
                        name: "Girls Sessions"
                    },
                    {
                        name: "Boys Sessions"
                    },
                    {
                        name: "Mixed Sessions"
                    } 
                ],
                onChange: search.handleFilters.handleTypeChange
            }
        },
        {
            title: "Age",
            name: "age",
            config: {
                value: search.filters.age,
                options: [
                    {
                        name: "Any"
                    },
                    {
                        name: "Ages 11 to 13"
                    },
                    {
                        name: "Ages 14 to 16"
                    },
                    {
                        name: "Ages 17 to 18"
                    }, 
                    {
                        name: "Ages 18 and above"
                    } 
                ],
                onChange: search.handleFilters.handleAgeChange
            }
        }
    ]

    return (
        <form>
            <Col lg={12}>
                <Row>
                    {filters.map((filter, index) => (
                        <Col key={index} lg={3} sm={12} className="p-1">
                            <Dropdown title={filter.title} name={filter.name} {...filter.config}/>
                        </Col>
                    ))}
                </Row>
            </Col>
        </form>
    )
}

Search.propTypes = {
    search: PropTypes.shape({
        filters: PropTypes.shape({
            date: PropTypes.any,
            time: PropTypes.any,
            type: PropTypes.any,
            age: PropTypes.any,
        }),
        handleFilters: PropTypes.shape({
            handleDateChange: PropTypes.func.isRequired,
            handleTimeChange: PropTypes.func.isRequired,
            handleTypeChange: PropTypes.func.isRequired,
            handleAgeChange: PropTypes.func.isRequired,
        }),
    })
}

export default Search
