import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../Atoms/Buttons/Button";
import Checkbox from "../Atoms/Form/Checkbox";
import Dropdown from "../Molecules/Dropdown";

function Search({onClick, handleFilters, filters}) {

    const configDate = {
       value: filters.date,
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
        onChange: handleFilters.handleDateChange
    }

    const configTime = {
        value: filters.time,
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
        onChange: handleFilters.handleTimeChange
    } 

    const configType = {
        value: filters.type,
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
        onChange: handleFilters.handleTypeChange
    } 
    
    const configAge = {
        value: filters.age,
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
        onChange: handleFilters.handleAgeChange
    }

    return (
        <form>
            <Col lg={12}>
                <Row>
                    <Col lg={3} md={3} sm={12} className="p-1">
                        <Dropdown title="Date" name="date" {...configDate} />
                    </Col>
                    <Col lg={3} md={3} sm={12} className="p-1">
                        <Dropdown title="Time" name="time" {...configTime} />
                    </Col>
                    <Col lg={3} md={3} sm={12} className="p-1">
                        <Dropdown title="Type" name="type" {...configType} />
                    </Col>
                    <Col lg={3} md={3} sm={12} className="p-1">
                        <Dropdown title="Age" name="age" {...configAge} />
                    </Col>
                </Row>
                <div className="py-2"></div>
                <Row>
                    <Col lg={3} md={3}>
                        <label>
                            <Checkbox onChange={handleFilters.handleCheck} value={filters.checkedValue} checked={filters.checked}/>
                            <span style={{color: "white", marginLeft: 8, fontWeight: 500}}>Available Slots</span>
                        </label>
                    </Col>
                    <Col lg={2} md={3} sm={12} className="ms-auto">
                        <Button style={{float: "right"}} text="SEARCH" onClick={onClick} />
                    </Col>
                </Row>
            </Col>
        </form>
    )
}

Search.propTypes = {
    onClick: PropTypes.func.isRequired,
    handleFilters: PropTypes.shape({
        handleDateChange: PropTypes.func.isRequired,
        handleTimeChange: PropTypes.func.isRequired,
        handleTypeChange: PropTypes.func.isRequired,
        handleAgeChange: PropTypes.func.isRequired,
        handleCheck: PropTypes.func.isRequired
    }),
    filters: PropTypes.shape({
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
        checkedValue: PropTypes.bool.isRequired
    })
}

export default Search
