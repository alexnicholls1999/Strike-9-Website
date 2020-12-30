import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

import Gender from '../Molecules/Form/Gender';
import Input from '../Atoms/Form/Input';
import {FormGroup} from 'react-bootstrap';

const StyledForm = styled.form`

    label {
        color: black;
        margin-bottom: 1rem;
        font-weight: bold;
    }

`;

const Step = styled.div `



`;




function Form() {

    const [teamName, setTeamName] = useState("");
    const [gender, setGender] = useState("");

    return (
        <StyledForm>
            <Step>
                <FormGroup>
                    <label>Enter Team Name</label>
                    <Input placeholder="Enter Team/Group Name" value={teamName} onChange={(e) => setTeamName(e.target.teamName) } />
                </FormGroup>
            </Step>
            <Step>
                <div className="p-4"></div>
                <h3>Personal Details</h3>
                <div className="p-2"></div>
                <FormGroup>
                    <label>First Name</label>
                    <Input placeholder="Enter Team/Group Name" value={teamName} onChange={(e) => setTeamName(e.target.teamName) } />
                </FormGroup>
                <FormGroup>
                    <label>Last Name</label>
                    <Input placeholder="Enter Team/Group Name" value={teamName} onChange={(e) => setTeamName(e.target.teamName) } />
                </FormGroup>
                <FormGroup>
                    <label>Email</label>
                    <Input placeholder="Enter Team/Group Name" value={teamName} onChange={(e) => setTeamName(e.target.teamName) } />
                </FormGroup>
                <FormGroup>
                    <label>Mobile</label>
                    <Input placeholder="Enter Team/Group Name" value={teamName} onChange={(e) => setTeamName(e.target.teamName) } />
                </FormGroup>
                <FormGroup>
                    <label>Gender</label>
                    <Gender gender={gender} handleGenderChange={(e) => setGender(e.target.gender)}/>
                </FormGroup>
                <FormGroup>
                    <label>Date of Birth</label>
                    <Input placeholder="Enter Team/Group Name" value={teamName} onChange={(e) => setTeamName(e.target.teamName) } />
                </FormGroup>
                <FormGroup>
                    <label>Ethnicity</label>
                    <Input placeholder="Enter Team/Group Name" value={teamName} onChange={(e) => setTeamName(e.target.teamName) } />
                </FormGroup>
            </Step>
        </StyledForm>
    )
}

export default Form;