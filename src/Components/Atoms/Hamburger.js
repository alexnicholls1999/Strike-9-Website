import React from 'react'

function Hamburger(props) {
    return (
        <div>
            <button aria-controls={props.ariaControls}>MENU</button>
        </div>
    )
}


export default Hamburger;


