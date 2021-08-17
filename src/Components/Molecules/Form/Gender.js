import { useFormikContext } from "formik";
import ErrorMessage from "../../Atoms/Form/ErrorMessage";
import Label from "../../Atoms/Form/Label";
import Select from "../../Atoms/Form/Select";


function Gender({...props}) {

    const formik = useFormikContext();

    return (
        <>
          <Label style={formik.errors.gender ? {color: "#C90808"} : null}>Gender</Label>
          <Select value={formik.values.gender} {...props} />
          <ErrorMessage>{formik.errors.gender}</ErrorMessage>
        </>
    )
}

export default Gender
