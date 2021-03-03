import React from 'react'
import PropTypes from "prop-types";
import Check from "@material-ui/icons/Check";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";


const Strike9StepIconStyles = makeStyles({
    root: {
        color: "#eaeaf0",
        display: "flex",
        height: 22,
        alignItems: "center"
    }, 
    active: {
        color: "#5e3d83",
        opacity: "100%"    
    },
    completed: {
        color: "#5E3D83",
        zIndex: 1,
        opacity: "100%"
    }
});

function StepIcon({active, completed}) {
    const classes = Strike9StepIconStyles();
    
    return (
        <div className={clsx(classes.root, {
            [classes.active]: active
        })}>
            {completed ? <Check className={classes.completed}/> : <Check />}
        </div>
    )
}

StepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool
}



export default StepIcon;
