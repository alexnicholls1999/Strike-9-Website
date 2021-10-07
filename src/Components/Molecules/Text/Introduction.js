import PropTypes from "prop-types";

function Introduction({content}) {
    return (
        <>
            <h1>{content.title}</h1>
            <p>{content.text}</p>
        </>
    )
}

Introduction.propTypes = {
    content: PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string
    })
}

export default Introduction
