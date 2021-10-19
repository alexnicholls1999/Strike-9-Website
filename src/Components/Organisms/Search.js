import PropTypes from "prop-types";
import {Row, Col} from "react-bootstrap";
import Dropdown from "./../Molecules/Dropdown";

function Search(onClick, handleFilters, filters) {

    const configDate = {
        // value: filters.date,
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
            },
        ],
        // onChange: handleFilters.handleDateChange
    }
    
    const configTime = {
        // value: filters.time,
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
        // onChange: handleFilters.handleTimeChange
    } 
    
    const configType = {
        // value: filters.type,
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
        // onChange: handleFilters.handleTypeChange
    } 
    
    const configAge = {
        // value: filters.age,
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
        // onChange: handleFilters.handleAgeChange
    }
    
    return (
        <form>
            <Col lg={12}>
                <Row>
                        <Col lg={3} sm={12} className="p-1">
                            <Dropdown title="Date" name="date" {...configDate} />
                        </Col>
                        <Col lg={3} sm={12} className="p-1">
                            <Dropdown title="Time" name="time" {...configTime} />
                        </Col>
                        <Col lg={3} sm={12} className="p-1">
                            <Dropdown title="Type" name="type" {...configType} />
                        </Col>
                        <Col lg={3} sm={12} className="p-1">
                            <Dropdown title="Age" name="age" {...configAge} />
                        </Col>   
                </Row>
            </Col>
        </form>
    )
}

export default Search
