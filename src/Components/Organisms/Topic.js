import PropTypes from "prop-types";
import Section from '.././Molecules/Text/Section';

function Topic({topic}) {
    return (
        <div>
            <img src={topic.img.src} alt={topic.img.alt} />
            <Section content={{ title: topic.title, paragraph: topic.paragraph}} />
        </div>
    )
}

Topic.propTypes = {
    topic: PropTypes.shape({
        img: PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired
        }),
        title: PropTypes.string.isRequired,
        paragraph: PropTypes.string
    })
}

export default Topic
