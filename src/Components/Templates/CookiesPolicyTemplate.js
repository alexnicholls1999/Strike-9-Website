import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import MainLayout from '../../Layouts/MainLayout'

function CookiesPolicyTemplate({isAuthenticated, signOut, modal, cookiesPolicyContent}) {
    if (modal) {
        return (
            <>
                <h2 style={{color: "Black"}}>{cookiesPolicyContent.hero.title}</h2>
                <div className="p-2"/>
                <p>{cookiesPolicyContent.introduction.paragraph}</p>

                {cookiesPolicyContent.guidelines.map((guideline) => <p>{guideline}</p>)}

                <p>{cookiesPolicyContent.conclusion.paragraph}</p>
            </>
        )
    } else {
        return (
            <MainLayout
                isAuthenticated={isAuthenticated}
                signOut={signOut}
                hero={{ content: { title: cookiesPolicyContent.hero.title, paragraph: cookiesPolicyContent.hero.paragraph }}} 
            >
                <div className="p-4"/>
                <Container>
                    <h5 style={{color: "#5E3CDC"}}>{cookiesPolicyContent.introduction.title}</h5>
                    <div className="p-2"/>
                    <p>{cookiesPolicyContent.introduction.paragraph}</p>
    
                    {cookiesPolicyContent.guidelines.map((guideline) => <p>{guideline}</p>)}
    
                    <p>{cookiesPolicyContent.conclusion.paragraph}</p>
                </Container>
    
                <div className="p-5"/>
            </MainLayout>
        )
    }
}

CookiesPolicyTemplate.propTypes = { 
    isAuthenticated: PropTypes.bool.isRequired,
    signOut: PropTypes.func.isRequired,
    cookiesPolicyContent: PropTypes.shape({
        hero: PropTypes.shape({
            title: PropTypes.string,
            paragraph: PropTypes.string
        }),
        introduction: PropTypes.shape({
            title: PropTypes.string,
            paragraph: PropTypes.string
        }),
        guidelines: PropTypes.any.isRequired,
        conclusion: PropTypes.shape({
            paragraph: PropTypes.string
        })
    })
}

export default CookiesPolicyTemplate
