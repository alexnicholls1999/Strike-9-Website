import React from 'react'
import {Row} from 'react-bootstrap'


import Hero from '../Components/Organisms/Hero'

function Events() {
    return (
        <>
            <Hero half>
                <form className="searchform">
                    <div className="search-filter">
                        <label>Date</label>
                        <select>
                        <option>Any</option>
                        <option>17th October 2020</option>
                        <option>20th October 2020</option>
                        <option>22nd October 2020</option>
                        </select>
                    </div>

                    <div className="search-filter">
                        <label>Time</label>
                        <select name="time">
                        <option>Any</option>
                        <option>09:00 - 12:00</option>
                        <option>12:00 - 14:00</option>
                        <option>14:00 - 16:00</option>
                        </select>
                    </div>

                    <div className="search-filter">
                        <label>Type</label>
                        <select name="type">
                        <option>Any</option>
                        <option>Girls Sessions</option>
                        <option>Boys Sessions</option>
                        <option>Mixed Sessions</option>
                        </select>
                    </div>

                    <div className="search-filter">
                        <label>Age</label>
                        <select name="age">
                        <option>Any</option>
                        <option>Ages 11 to 13</option>
                        <option>Ages 14 to 16</option>
                        <option>Ages 17 to 18</option>
                        <option>Ages 18 or above</option>
                        </select>
                    </div>

                    <div>
                        {/* <input
                        type="checkbox"
                        className="form-check-input filled-in"
                        onChange={}
                        /> */}

                        <label className="form-check-label" for="roundedExample2">
                        Available Slots
                        </label>

                        <button style={{ marginLeft: "10px" }}>
                        Search
                        </button>
                    </div>
                </form>
            </Hero>
            
        </>
    )
}

export default Events;
