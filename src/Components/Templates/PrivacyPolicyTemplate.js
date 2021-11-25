import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import MainLayout from '../../Layouts/MainLayout'
import Blurb from "../Molecules/Text/Blurb";
import Summary from "../Organisms/Summary";

function PrivacyPolicyTemplate({isAuthenticated, signOut, privacyPolicyContent}) {

    return (
        <MainLayout
            isAuthenticated={isAuthenticated}
            signOut={signOut}
            hero={{ content: { title: privacyPolicyContent.hero.title, paragraph: privacyPolicyContent.hero.paragraph }}} 
        >
            <div className="p-4"/>
            <Container>
                <h5 style={{color: "#5E3CDC"}}>{privacyPolicyContent.introduction.title}</h5>
                <div className="p-2"/>
                <p>{privacyPolicyContent.introduction.paragraph}</p>

                {privacyPolicyContent.guidelines.map((guideline) => <p>{guideline}</p>)}

                <p>{privacyPolicyContent.conclusion.paragraph}</p>
            </Container>

            <div className="p-5"/>
        </MainLayout>
    )
}

PrivacyPolicyTemplate.propTypes = { 
    isAuthenticated: PropTypes.bool.isRequired,
    signOut: PropTypes.func.isRequired,
    privacyPolicyContent: PropTypes.shape({
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

export default PrivacyPolicyTemplate
