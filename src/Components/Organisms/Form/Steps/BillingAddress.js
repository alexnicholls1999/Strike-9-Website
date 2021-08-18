import { useFormikContext } from 'formik';
import Input from '../../../Atoms/Form/Input';
import Label from '../../../Atoms/Form/Label';

function BillingAddress() {
    const formik = useFormikContext();
    
    return (
        <>
            <Label>Team Name: </Label>
            <Input 
                value={formik.values.location}
                type="text"
                name="location"
                onChange={formik.handleChange}
                placeholder="Enter Location"
            />
        </>
    )
}

export default BillingAddress
