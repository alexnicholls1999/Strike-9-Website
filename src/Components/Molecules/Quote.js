import PropTypes from "prop-types"
import styled from "styled-components"

function Quote({quote}) {
    return (
        <>
          <p>{quote.message}</p>
          <h5>{quote.name}</h5>
          <h6>{quote.rating}</h6>  
        </>
    )
}

Quote.propTypes = {
    quote: PropTypes.shape({
        message: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        rating:  PropTypes.number.isRequired
    })
}

export default Quote
