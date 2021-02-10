import React from 'react';
import IndexSection from '../Molecules/IndexSection';
import trainingImage from '../../assets/Training.png';
import eventsImage from '../../assets/Events.png';
import corporateImage from '../../assets/Corporate.png';

function Index() {
    return (
        <>
          <IndexSection 
            src={trainingImage} 
            alt="FootballIndex-01" 
            headingTitle="01" 
            title="TRAINING" 
            message="Post videos with your skills. Like and follow others to be more popular." 
            text="TRAINING"
          />  
          <IndexSection 
            alternate 
            src={eventsImage} 
            alt="FootballIndex-02" 
            headingTitle="02" 
            title="EVENTS" 
            message="Contact others to find the right coach or athlete you are looking for." 
            text="EVENTS"
          />  
          <IndexSection 
            src={corporateImage} 
            alt="FootballIndex-03" 
            headingTitle="03" 
            title="CORPORATE" 
            message="Enjoy being a student athlete, the recruiting process can be overwhelming, we want to make this a enjoyable experience." 
            text="CORPORATE"
          />  
        </>
    )
}

export default Index
