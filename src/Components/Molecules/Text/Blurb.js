import PropTypes from 'prop-types';
import styled from "styled-components";


function Blurb({content}) {
    return (
        <>
            <h6>{content.title}</h6>
            <h4>{content.text}</h4>
        </>
    )
}


Blurb.propTypes = {
    content: PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string
    })
}

export default Blurb
