import React from 'react';

function Ethnicity(props) {

  const {value, onChange} = props;

    return (
        <select style={{width: "350px"}} class="form-control dropdown" id="ethnicity" value={value} onChange={onChange} name="ethnicity">
        <option>Enter Ethnicity</option>
        <optgroup label="White">
          <option name="White English">English</option>
          <option name="White Welsh">Welsh</option>
          <option name="White Scottish">Scottish</option>
          <option name="White Northern Irish">Northern Irish</option>
          <option name="White Irish">Irish</option>
          <option name="White Gypsy or Irish Traveller">Gypsy or Irish Traveller</option>
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
          <option name="Other">Any other ethnic group</option>
        </optgroup>
      </select>
    )
}


export default Ethnicity;