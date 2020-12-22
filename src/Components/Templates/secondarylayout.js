import React from 'react'
import Header from '../Organisms/Header'

function SecondaryLayout(props) {
    return (
        <>
            <Header secondary/>
            <div>
                {props.children}
            </div>

        </>
    )
}

export default SecondaryLayout;