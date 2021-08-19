import { useFormikContext } from 'formik';
import FormControl from '../../../Molecules/FormControl';


function BillingAddress() {
    const formik = useFormikContext();

    const configBillingAddress1 =  {
        style: formik.errors.billingAddressLine1 ? {borderColor: "#C90808"} : null,
        type: "text",
        name: "billingAddressLine1",
        value: formik.values.billingAddressLine1,
        onChange: formik.handleChange,
        placeholder: "Enter Billing Address Line 1"
    };
    
    return (
        <>
            <FormControl labelProps={{labelName: "Billing Address Line 1: ", labelStyle: formik.errors.billingAddressLine1 ? {color: "#C90808"} : null}} errMsg={formik.errors.billingAddressLine1} {...configBillingAddress1}/>
        </>
    )
}

export default BillingAddress
