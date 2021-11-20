import { useContext } from 'react'
import AboutTemplate from '../Components/Templates/AboutTemplate'
import { ContentContext } from '../utils/Context/ContentContext'

function About({isAuthenticated, signOut}) {

    const content = useContext(ContentContext);

    const aboutContent = {
        heroTitle: content.about.hero.title,
        paragraph: content.about.hero.paragraph,
        summary: {
            blurb: {
                title: content.about.summary.blurb.title,
                paragraph: content.about.summary.blurb.paragraph
            },
            paragraph: content.about.summary.paragraph
        },
        gallery: content.about.gallery.images.group1,
        benefits: content.about.benefits,
        coaching: {
            bgImage: content.about.coaching.bgImage,
            link: content.about.coaching.path
        }
    }

    return <AboutTemplate isAuthenticated={isAuthenticated} signOut={signOut} aboutContent={aboutContent} />
}

export default About
