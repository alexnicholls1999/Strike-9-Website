import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePicker(props) {

  const {selected, onChange} = props;

  return (
    <ReactDatePicker
      selected={selected}
      onChange={onChange}
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
