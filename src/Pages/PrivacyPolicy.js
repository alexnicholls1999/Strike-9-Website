import { useContext } from "react";
import PrivacyPolicyTemplate from "../Components/Templates/PrivacyPolicyTemplate"
import { ContentContext } from "../utils/Context/ContentContext";

function PrivacyPolicy({isAuthenticated, modal, signOut}) {

    const content = useContext(ContentContext);

    const privacyPolicyContent = {
        hero: {
            title: content.legal.privacyPolicy.hero.title,
            paragraph: content.legal.privacyPolicy.hero.paragraph
        },
        introduction: {
            title: content.legal.privacyPolicy.introduction.title,
            paragraph: content.legal.privacyPolicy.introduction.paragraph
        },
        guidelines: content.legal.privacyPolicy.guidelines,
        conclusion: {
            paragraph: content.legal.privacyPolicy.conclusion.paragraph
        }
    }

    return <PrivacyPolicyTemplate modal={modal} isAuthenticated={isAuthenticated} signOut={signOut} privacyPolicyContent={privacyPolicyContent}/>
}

export default PrivacyPolicy;
