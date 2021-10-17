import { faBuilding, faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";

const contact = {
    hero: {
        title: "GET IN TOUCH",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit blanditiis illum at eligendi id debitis quas autem iusto recusandae sed." 
    },
    contactform: {
        contactInfo: {
            title: "Contact Information",
            contactMethods: [
                {
                    icon: faBuilding,
                    paragraph: "Moseley School Sports Centre, Springfield Road, B13 9NP"
                },
                {   
                    icon: faMobile,
                    paragraph: "079341234113"
                },
                {
                    icon: faEnvelope,
                    paragraph: "info@strike9training.co.uk"
                }
            ]
        },

        // add user contact details array to form 

    },
    map: {
        accessToken: "",
        coordinates: {
            lat: -85910,
            lng: 52.44150
        },
        zoom: 14
    }
}

export default contact;