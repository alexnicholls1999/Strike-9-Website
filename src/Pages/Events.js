import React from 'react'
import {Row} from 'react-bootstrap'


import Button from '../Components/Atoms/Button'
import Input from '../Components/Atoms/Form/Input'
import SearchFilter from '../Components/Molecules/SearchFilter'

import Hero from '../Components/Organisms/Hero'

function Events() {

    const configFilters = {
        options: [{
          name: 'Show all',
          value: ''
        }, {
          name: 'Mens',
          value: 'mens'
        }, {
          name: 'Womens',
          value: 'womens'
        }]
    };

    return (
        <>
            <Hero half>
                
                <SearchFilter {...configFilters}/>

                <Button text="SEARCH"/>
                
            </Hero>
            
        </>
    )
}

export default Events;
