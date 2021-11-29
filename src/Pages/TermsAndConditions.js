import { useContext } from "react";
import TermsAndConditionsTemplate from "../Components/Templates/TermsAndConditionsTemplate"
import { ContentContext } from "../utils/Context/ContentContext";

function TermsAndConditions({isAuthenticated, signOut, modal}) {

    const content = useContext(ContentContext);

    const termsAndConditionsContent = {
        hero: {
            title: content.legal.termsAndConditions.hero.title,
            paragraph: content.legal.termsAndConditions.hero.paragraph
        },
        introduction: {
            title: content.legal.termsAndConditions.introduction.title,
            paragraph: content.legal.termsAndConditions.introduction.paragraph
        },
        guidelines: content.legal.termsAndConditions.guidelines,
        conclusion: {
            paragraph: content.legal.termsAndConditions.conclusion.paragraph
        }
    }

    return <TermsAndConditionsTemplate isAuthenticated={isAuthenticated} signOut={signOut} modal={modal} termsAndConditionsContent={termsAndConditionsContent}/>
}

export default TermsAndConditions
