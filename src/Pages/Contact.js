import {useContext} from 'react'
import ContactTemplate from '../Components/Templates/ContactTemplate'
import { ContentContext } from '../utils/Context/ContentContext';

function Contact() {

    const content = useContext(ContentContext);

    const contactContent = {
        heroTitle: content.contact.hero.title, 
        paragraph: content.contact.hero.paragraph,
    }

    return <ContactTemplate contactContent={contactContent} />
}

export default Contact
