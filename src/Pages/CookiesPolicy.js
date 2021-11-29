import { useContext } from "react";
import CookiesPolicyTemplate from "../Components/Templates/CookiesPolicyTemplate"
import { ContentContext } from "../utils/Context/ContentContext";

function CookiesPolicy({isAuthenticated, modal, signOut}) {

    const content = useContext(ContentContext);

    const cookiesPolicyContent = {
        hero: {
            title: content.legal.cookies.hero.title,
            paragraph: content.legal.cookies.hero.paragraph
        },
        introduction: {
            title: content.legal.cookies.introduction.title,
            paragraph: content.legal.cookies.introduction.paragraph
        },
        guidelines: content.legal.cookies.guidelines,
        conclusion: {
            paragraph: content.legal.cookies.conclusion.paragraph
        }
    }

    return <CookiesPolicyTemplate modal={modal} isAuthenticated={isAuthenticated} signOut={signOut} cookiesPolicyContent={cookiesPolicyContent}/>
}

export default CookiesPolicy;
