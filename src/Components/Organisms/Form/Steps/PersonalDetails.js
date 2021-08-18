import { useFormikContext } from 'formik';
import Input from '../../../Atoms/Form/Input';
import Label from '../../../Atoms/Form/Label';

function PersonalDetails() {
    const formik = useFormikContext();
    
    return (
        <>
            <Label>Full Name: </Label>
            <Input 
                value={formik.values.fullName}
                type="text"
                name="fullName"
                onChange={formik.handleChange}
                placeholder="Enter Full Name"
            />
        </>
    )
}

export default PersonalDetails
