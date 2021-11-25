import about from "./contentPages/about.content";
import home from "./contentPages/home.content";
import training from "./contentPages/training.content";
import coaching from "./contentPages/coaching.content";
import contact from "./contentPages/contact.content";
import termsAndConditions from "./legal-Information/termsAndConditions";
import privacyPolicy from "./legal-Information/privacyPolicy";

const content = {
    home: home,
    about: about,
    training: training,
    coaching: coaching,
    contact: contact,
    legal: {
        termsAndConditions: termsAndConditions,
        privacyPolicy: privacyPolicy
    }
}

export default content;