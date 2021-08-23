import PropTypes from 'prop-types'
import { FormGroup } from 'react-bootstrap'
import Input from '../Atoms/Form/Input';
import Label from '../Atoms/Form/Label';
import ErrorMessage from '../Atoms/Form/ErrorMessage';

function FormControl({labelProps, errMsg, ...props}) {
    return (
        <FormGroup>
            <Label style={labelProps.labelStyle}>{labelProps.labelName}</Label>
            <div className="p-1"></div>
            <Input {...props}/>
            <ErrorMessage>{errMsg}</ErrorMessage>
        </FormGroup>
    )
}

FormControl.propTypes = {
    labelProps: PropTypes.shape({
        labelStyle: PropTypes.object,
        labelName: PropTypes.string.isRequired
    }),
    errMsg: PropTypes.string
}

export default FormControl;
