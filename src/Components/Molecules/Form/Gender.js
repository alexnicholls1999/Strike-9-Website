import { useFormikContext } from "formik";
import Label from "./../../Atoms/Forms/Label";
import ErrorMessage from "./../../Atoms/Forms/ErrorMessage";


function Gender() {
    
    const formik = useFormikContext();

    return (
        <>
          <Label style={formik.errors.gender ?  {color: "#C90808"} : null}>Gender</Label>
          <select name="gender" value={formik.values.gender} className="form-control dropdown" onChange={formik.handleChange} onBlur={formik.handleBlur}>
            <option value="">Enter Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>  
          <ErrorMessage>{formik.errors.gender}</ErrorMessage>
        </>
    )
}

export default Gender
