import PropTypes from "prop-types";
import styled from "styled-components";
import ReactDatePicker from "react-datepicker";
import { useField, useFormikContext } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import { FormGroup } from "react-bootstrap";
import Label from "../../Atoms/Form/Label";
import ErrorMessage from "../../Atoms/Form/ErrorMessage";

const StyledDatePickerWrapper = styled.div`

    position: relative;
    
    .react-datepicker-wrapper {
        width: 100%;
        border: none;
        outline: none;

        .react-datepicker__input-container input {
            font-size: 15px;
            padding: 10px;
            width: 100%;
            border-radius: 3px;
            border: 1px solid #F4F4F4;
            display: block;
        
            @media(min-width: 768px){
                width: 350px;
            }
        }

    }
    .react-datepicker-popper {
        width: 90%;
    }
    .react-datepicker {
        border: none;
        box-shadow: 0px 0px 20px 7px rgba( 26, 26, 26, 15%);
        width: 100%;
        .react-datepicker__month-container {
            width: 100%;
        }
        .react-datepicker__navigation--previous {
            border-right-color: ${({theme}) => theme.colors.primary.DaisyBush};
        }
        .react-datepicker__navigation--next {
            border-left-color: ${({theme}) => theme.colors.primary.DaisyBush};
        }
        .react-datepicker__navigation--previous, .react-datepicker__navigation--next {
            top: 25px;
        }
        
        .react-datepicker__triangle {
            display: none;
        }
        .react-datepicker__header {
            background: none;
            border-bottom: none;
            padding-top: 20px;
        
            .react-datepicker__current-month {
                color: ${({theme}) => theme.colors.primary.DaisyBush};
                padding-bottom: 10px;
            }
            .react-datepicker__month-select, .react-datepicker__year-select  {
                border: none;
            }

            .react-datepicker__month-select {        
                width: 120px;
            }

            .react-datepicker__year-select {        
                width: 70px;
            }

            .react-datepicker__day-name {
                color: ${({theme}) => theme.colors.neutral.SilverGrey};
                font-weight: lighter;
            }
        }
        .react-datepicker__month {
            margin-top: 0;
            margin-bottom: 0.75rem;
            .react-datepicker__day--selected, .react-datepicker__day--keyboard-selected{
                background-color: ${({theme}) => theme.colors.primary.DaisyBush};
                font-weight: bold;
            }
            .react-datepicker__day--outside-month {
                color: #e2e2e2;
            }
        }
    }

`;

function DatePicker({labelProps, errMsg, ...props}) {

    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);

    return (
        <FormGroup>
            <Label style={labelProps.labelStyle}>{labelProps.labelName}</Label>
            <StyledDatePickerWrapper>
                <ReactDatePicker selected={(field.value && new Date(field.value)) || null}
                    onChange={val => {
                        setFieldValue(field.name, val);
                    }}
                    dateFormat="dd/mm/yyyy"
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                />
            </StyledDatePickerWrapper> 
            <ErrorMessage>{errMsg}</ErrorMessage>
        </FormGroup>
    )
}

DatePicker.propTypes = {
    labelProps: PropTypes.shape({
        labelStyle: PropTypes.string,
        labelName: PropTypes.string
    }),
    errMsg: PropTypes.string
}

export default DatePicker
