import React from 'react'

function TextArea({...props}) {
    return (
        <textarea className="form-control" {...props}/>
    )
}

export default TextArea
