import { useFormikContext } from 'formik';
import Input from '../../../Atoms/Form/Input';
import Label from '../../../Atoms/Form/Label';


function Summary() {
    const formik = useFormikContext();
    
    return (
        <>
            <ul>
                <li>{formik.values.teamName}</li>
                <li>{formik.values.fullName}</li>
                <li>{formik.values.location}</li>
            </ul>
        </>
    )
}

export default Summary
