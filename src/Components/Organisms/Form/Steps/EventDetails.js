import { useFormikContext } from 'formik';
import Input from '../../../Atoms/Form/Input';
import Label from '../../../Atoms/Form/Label';

function EventDetails() {
    
    const formik = useFormikContext();
    
    return (
        <>
            <Label>Team Name: </Label>
            <Input 
                value={formik.values.teamName}
                type="text"
                name="teamName"
                onChange={formik.handleChange}
                placeholder="Enter Team Name"
            />
        </>
    )
}

export default EventDetails
