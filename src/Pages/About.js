import { useContext } from 'react'
import AboutTemplate from '../Components/Templates/AboutTemplate'
import { ContentContext } from '../utils/Context/ContentContext'

function About() {

    const content = useContext(ContentContext);

    return (
        <AboutTemplate 
            aboutContent={{
                heroTitle: content.about.hero.title,
                paragraph: content.about.hero.paragraph
            }}
        />
    )
}

export default About
