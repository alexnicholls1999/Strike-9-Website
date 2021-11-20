import {useContext} from 'react'
import ContactTemplate from '../Components/Templates/ContactTemplate'
import { ContentContext } from '../utils/Context/ContentContext';

function Contact({isAuthenticated, signOut}) {

    const content = useContext(ContentContext);

    const contactContent = {
        heroTitle: content.contact.hero.title, 
        paragraph: content.contact.hero.paragraph,
        contactForm: {
            title: content.contact.contactFormTitle,
            
        },
        contactInfo: {
            title: content.contact.contactInfo.title,
            contactMethods: content.contact.contactInfo.contactMethods
        },
        map: {
            accessToken: content.contact.map.accessToken,
            zoom: content.contact.map.zoom,
            location: {
                lat: content.contact.map.location.lat,
                lng: content.contact.map.location.lng
            }
        }
    }

    return <ContactTemplate isAuthenticated={isAuthenticated} signOut={signOut} contactContent={contactContent} />
}

export default Contact
