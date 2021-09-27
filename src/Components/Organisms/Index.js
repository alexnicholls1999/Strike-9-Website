import IndexSection from '../Molecules/IndexSection'
import trainingImage from "./../../assets/Training.png";
import eventsImage from "./../../assets/Events.png";
import corporateImage from "./../../assets/Corporate.png";

const sections = [
    {
        indexProps: {
            src: trainingImage,
            alt: "FootballIndex-01",
            title: "TRAINING",
            message: "Post videos with your skills. Like and follow others to be more popular."
        },
        title: "01",
        text: "TRAINING",
        alternate: false
    },
    {
        indexProps: {
            src: eventsImage,
            alt: "FootballIndex-02",
            title: "EVENTS", 
            message: "Contact others to find the right coach or athlete you are looking for." 
        },
        title: "02",
        text: "EVENTS",
        alternate: true
    },
    {
        indexProps: {
            src: corporateImage,
            alt: "FootballIndex-03",
            title: "CORPORATE", 
            message: "Enjoy being a student athlete, the recruiting process can be overwhelming, we want to make this a enjoyable experience." 
        }, 
        title: "03",
        text: "CORPORATE",
        alternate: false
    }
]

function Index() {
    return (
        <>
            {sections.map(({indexProps, alternate, title, text}) => {
                return <IndexSection indexProps={indexProps} title={title} text={text} alternate={alternate} />
            })}
        </>
    )
}

export default Index;