import { useFormikContext } from 'formik';
import ErrorMessage from "../../Atoms/Forms/ErrorMessage";
import Label from "../../Atoms/Forms/Label";

function Ethnicity() {

    const formik = useFormikContext();

    return (
        <>
            <Label style={formik.errors.ethnicity ? {color: "#C90808"} : null}>Ethnicity</Label>
            <select style={formik.errors.ethnicity ? {borderColor: "#C90808"} : null} class="form-control dropdown" value={formik.values.ethnicity} onBlur={formik.handleBlur} onChange={formik.handleChange} name="ethnicity">
            <option>Enter Ethnicity</option>
            <option name="nottosay">Prefer not to say</option>
            <optgroup label="White">
                <option name="White English">English</option>
                <option name="White Other">Any other White background</option>
            </optgroup>
            <optgroup label="Mixed or Multiple ethnic groups">
                <option name="Mixed White and Black Caribbean">White and Black Caribbean</option>
                <option name="Mixed White and Black African">White and Black African</option>
                <option name="Mixed White Other">Any other Mixed or Multiple background</option>
            </optgroup>
            <optgroup label="Asian">
                <option name="Asian Indian">Indian</option>
                <option name="Asian Pakistani">Pakistani</option>
                <option name="Asian Bangladeshi">Bangladeshi</option>
                <option name="Asian Chinese">Chinese</option>
                <option name="Asian Other">Any other Asian background</option>
            </optgroup>
            <optgroup label="Black">
                <option name="Black African">African</option>
                <option name="Black African American">African American</option>
                <option name="Black Caribbean">Caribbean</option>
                <option name="Black Other">Any other Black background</option>
            </optgroup>
            <optgroup label="Other ethnic groups">
                <option name="Arab">Arab</option>
                <option name="Hispanic">Hispanic</option>
                <option name="Latino">Latino</option>
                <option name="Native American">Native American</option>
                <option name="Pacific Islander">Pacific Islander</option>
            </optgroup>
            <option name="Other">Any other ethnic group</option>
            </select>
            <ErrorMessage>{formik.errors.ethnicity}</ErrorMessage>  
        </>
    )
}

export default Ethnicity
