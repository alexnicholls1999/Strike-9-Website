import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import MainLayout from '../../Layouts/MainLayout'

function TermsAndConditionsTemplate({isAuthenticated, signOut, termsAndConditionsContent}) {
    return (
        <MainLayout
            isAuthenticated={isAuthenticated}
            signOut={signOut}
            hero={{ content: { title: termsAndConditionsContent.hero.title, paragraph: termsAndConditionsContent.hero.paragraph }}} 
        >
            <div className="p-4"/>
            <Container>
                <h5 style={{color: "#5E3CDC"}}>{termsAndConditionsContent.introduction.title}</h5>
                <div className="p-2"/>
                <p>{termsAndConditionsContent.introduction.paragraph}</p>

                {termsAndConditionsContent.guidelines.map((guideline) => <p>{guideline}</p>)}

                <p>{termsAndConditionsContent.conclusion.paragraph}</p>
            </Container>

            <div className="p-5"/>
        </MainLayout>
    )
}

TermsAndConditionsTemplate.propTypes = { 
    isAuthenticated: PropTypes.bool.isRequired,
    signOut: PropTypes.func.isRequired,
    termsAndConditionsContent: PropTypes.shape({
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

export default TermsAndConditionsTemplate
