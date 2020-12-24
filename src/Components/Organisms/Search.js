import React from 'react';
import styled from 'styled-components';



import Dropdown from "../Molecules/Dropdown";
import Button from "../Atoms/Button";
import { Container, Row, Col} from 'react-bootstrap';
import { Route } from 'react-router';

const SearchForm = styled.form`
    

`;

function Search(props) {

    const { handleDateChange, handleTimeChange, handleTypeChange, handleAgeChange, date, time, type, age, onClick} = props;

    const configDate = {
        value: date,
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
        handleChange: handleDateChange
    }

    const configTime = {
        value: time,
        options: [
            {
                name: "Any",
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
        handleChange: handleTimeChange
    }

    const configType = {
        value: type,
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
        handleChange: handleTypeChange
    }

    const configAge = {
        value: age, 
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
        handleChange: handleAgeChange
    }

    return (
        <SearchForm>
                <Col lg={12}>
                    <Row>
                        <Col lg={3} md={3} sm={12} className="p-1">
                            <Dropdown text="Date" {...configDate} />
                        </Col>
                        <Col lg={3} md={3} sm={12} className="p-1">
                            <Dropdown text="Time" {...configTime} />
                        </Col>
                        <Col lg={3} md={3} sm={12} className="p-1">
                            <Dropdown text="Type" {...configType} />
                        </Col>
                        <Col lg={3} md={3} sm={12} className="p-1">
                            <Dropdown text="Age" {...configAge} />
                        </Col>
                        <div className="py-5"></div>
                        <Col lg={3} md={3} sm={12} className="p-1 py-1 ml-auto">
                            <Button style={{float: "right"}} text="SEARCH" onClick={onClick}/>
                        </Col>
                    </Row>
                </Col>
                
        </SearchForm>
    )
}

export default Search;