import React from "react";
import ReactDatePicker from "react-datepicker";
import { useField, useFormikContext } from "formik";
import "react-datepicker/dist/react-datepicker.css";

function DatePicker({...props}) {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <ReactDatePicker
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
      dateFormat="dd/mm/yyyy"
      isClearable
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
    />
  );
}

export default DatePicker;
