import PropTypes from "prop-types";
import { FormGroup } from "react-bootstrap";
import ErrorMessage from "../../Atoms/Form/ErrorMessage";
import Label from "../../Atoms/Form/Label";
import Select from "../../Atoms/Form/Select";


function Gender({labelProps, errMsg, ...props}) {

    return (
        <FormGroup>
          <Label style={labelProps.labelStyle}>{labelProps.labelName}</Label>
          <div className="p-1"></div>
          <Select {...props} />
          <ErrorMessage>{errMsg}</ErrorMessage>
        </FormGroup>
    )

}

Gender.propTypes = {
  labelProps: PropTypes.shape({
    labelStyle: PropTypes.string,
    labelName: PropTypes.string
  }),
  errMsg: PropTypes.string
}


export default Gender
