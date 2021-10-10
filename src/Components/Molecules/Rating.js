import React from 'react'
import Star from '../Atoms/Star'

function Rating({rating}) {
    return Array.from({length: rating}).map((star, index) => <Star active={index} />)
}

export default Rating
