import React from 'react'
import { Col, Row } from 'react-bootstrap';
import styled from "styled-components"
import Checkbox from '../Atoms/Forms/Checkbox';
import Button from '../Atoms/Button';
import Dropdown from '../Molecules/Dropdown';


const SearchForm = styled.form`

`;

function Search({handleDateChange, handleTimeChange, handleTypeChange, handleAgeChange, handleCheck, checked, checkedValue, date, time, type, age, onClick}) {
    
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
                        <Dropdown text="Date" name="date" {...configDate} />
                    </Col>
                    <Col lg={3} md={3} sm={12} className="p-1">
                        <Dropdown text="Time" name="time" {...configTime} />
                    </Col>
                    <Col lg={3} md={3} sm={12} className="p-1">
                        <Dropdown text="Type" name="type" {...configType} />
                    </Col>
                    <Col lg={3} md={3} sm={12} className="p-1">
                        <Dropdown text="Age" name="age" {...configAge} />
                    </Col>
                    <div className="py-5"></div>
                    <Col lg={3} md={3}>
                        <label>
                            <Checkbox onChange={handleCheck} value={checkedValue} checked={checked} />
                            <span style={{ marginLeft: 8, fontWeight: 500}}>Available Slots</span>
                        </label>
                    </Col>
                    <Col lg={3} md={3} sm={12} className="p-1 py-1 ml-auto">
                        <Button style={{float: "right"}} text="SEARCH" onClick={onClick} />
                    </Col>
                </Row>
            </Col>
        </SearchForm>
    )
}

export default Search
