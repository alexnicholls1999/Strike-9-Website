import { StepLabel } from "@material-ui/core";
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledLabel = styled.label`
    
`;

const StyledStepLabel = styled(StepLabel)`
    .MuiTypography-body2 {
        font-size: 1rem !important;
        font-family: "Muli", sans-serif !important;
        font-weight: 600;
        line-height: 1.43;
        letter-spacing: 0.01071em;
    }
    .MuiStepLabel-label {
        color: #f1f1f1;
        display: none;
    }
    .MuiStepLabel-label.MuiStepLabel-completed {
        color: ${({theme}) => theme.colors.primary[500]};
        font-weight: ${({theme}) => theme.typography.fontWeight.bold};
    }
    .MuiStepLabel-label.MuiStepLabel-active {
        color: ${({theme}) => theme.colors.primary[500]};
        font-weight: ${({theme}) => theme.typography.fontWeight.bold};
    }
    @media(min-width: ${({theme}) => theme.viewport.md}) {
        .MuiStepLabel-label {
            display: block
        }
    }
`;

function Label({name, step}) {
    return (
        <>
            {step ? (
                <StyledLabel>{name}</StyledLabel>
            ) : (
                <StyledStepLabel StepIconComponent={step.component}>{step.name}</StyledStepLabel>
            )}
        </>
    )
}

Label.propTypes = {
    name: PropTypes.string.isRequired,
    step: PropTypes.shape({
        component: PropTypes.element.isRequired,
        name: PropTypes.any.isRequired
    })
}

export default Label
