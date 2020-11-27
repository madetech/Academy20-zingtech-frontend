import React from 'react';

import Fieldset from "@govuk-react/fieldset";
import Select from '@govuk-react/select';

import {ValidatingInputField} from "./ValidatingInputField"


const validationRules = {
  "firstName": {
    "function": (value) => { return value !== "Steve" },
    "message": "No Steves allowed"
  }
}

const notNull = (value) => value !== "" || value !== null;
const alphabetOnly = (value) => !/\d/.test(value);
const numbersOnly = (value) => !/\D/.test(value);
const emailOnly = (value) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
}
const phoneOnly = (value) => {
  const re = /^([0-9]{5})[. -]([0-9]{3,})?[. -]?([0-9]{3})?$/
  return re.test(String(value));
}
const postcodeOnly = (value) => {
  const re = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/;
  return re.test(String(value));
}


export default function CreateForm( {employeeObject, setEmployeeObject, validateState, setValidateState} ) {
   

  const changeValue = (value,name) => {
    setEmployeeObject({ ...employeeObject, [name]: value })
  }

  const changeValidInput = (value, name) => {
    setValidateState({ ...validateState, [name]: value })
    console.log(name)
    console.log(value)
    console.log(validateState)
  }

  return (
    <form>
      <Fieldset id="employeeInformation">
        <Fieldset.Legend>
          <b>Employee Information</b>
        </Fieldset.Legend>
          <ValidatingInputField 
            name={"firstName"}
            label={"First Name"} 
            value={employeeObject.firstName} 
            changeValue={changeValue} 
            validate={(value) => !/\d/.test(value) && value !== ""  }
            errorMessage={"First name must only contain alphanumeric characters"}
            validInput={changeValidInput}
            />
        <br />

        <ValidatingInputField 
            name={"lastName"}
            label={"Last Name"} 
            value={employeeObject.lastName} 
            changeValue={changeValue} 
            validate={(value) => !/\d/.test(value) && value !== ""  }
            errorMessage={"Last name must only contain alphanumeric characters"}
            validInput={changeValidInput}
            />
        <br />
        <ValidatingInputField 
            name={"email"}
            label={"Email address"} 
            value={employeeObject.email} 
            changeValue={changeValue} 
            validate={emailOnly}
            errorMessage={"Must be a valid email address"}
            validInput={changeValidInput}
            />

        <br />
        <ValidatingInputField 
            name={"mobileNumber"}
            label={"Mobile Number"} 
            value={employeeObject.mobileNumber} 
            changeValue={changeValue} 
            validate={phoneOnly}
            errorMessage={"Please format phone numbers like this: 07483 432 943 or 01283 23432"}
            validInput={changeValidInput}
            />
        <br />

        <ValidatingInputField 
            name={"address"}
            label={"Address"} 
            value={employeeObject.address} 
            changeValue={changeValue} 
            validate={(value) => value !== "" && value !== null}
            errorMessage={"Cannot be left blank"}
            validInput={changeValidInput}
            />
        <br />

        <ValidatingInputField 
            name={"city"}
            label={"City"} 
            value={employeeObject.city} 
            changeValue={changeValue} 
            validate={(value) => value !== "" && value !== null}
            errorMessage={"Cannot be left blank"}
            validInput={changeValidInput}
            />
        <br />

        <ValidatingInputField 
            name={"postcode"}
            label={"Postcode"} 
            value={employeeObject.postcode} 
            changeValue={changeValue} 
            validate={postcodeOnly}
            errorMessage={"Please format postcodes like this: GU1 9BS"}
            validInput={changeValidInput}
            />
        <br />
      </Fieldset>

      <Fieldset id="nextOfKinInfo">
        <Fieldset.Legend>
          <b>Next of Kin Information</b>
        </Fieldset.Legend>
        <ValidatingInputField 
            name={"nextOfKinName"}
            label={"Full Name"} 
            value={employeeObject.nextOfKinName} 
            changeValue={changeValue} 
            validate={(value) => !/\d/.test(value) && value !== ""  }
            errorMessage={"Next of kin name must only contain alphanumeric characters"}
            validInput={changeValidInput}
            />

        <br />
        <ValidatingInputField 
            name={"nextOfKinContactNumber"}
            label={"Contact number"} 
            value={employeeObject.nextOfKinContactNumber} 
            changeValue={changeValue} 
            validate={phoneOnly}
            errorMessage={"Please format phone numbers like this: 07483 432 943 or 01283 23432"}
            validInput={changeValidInput}
            />
        <br />
      </Fieldset>

      <Fieldset id="employmentDetails">
        <Fieldset.Legend>
          <b>Employment Details</b>
        </Fieldset.Legend>
        <Select  label="Salary Band"
        name="salaryBand"
        value={employeeObject.salaryBand}
        onChange={(e) =>
          setEmployeeObject({
            ...employeeObject,
            salaryBand: parseInt(e.target.value,10),
          })
        }>
          <option value={null}>Please choose a salary band</option>
          <option value="1">Band 1</option>
          <option value="2">Band 2</option>
          <option value="3">Band 3</option>
          <option value="4">Band 4</option>
          <option value="5">Band 5</option>
          <option value="6">Band 6</option>
          <option value="7">Band 7</option>
          <option value="8">Band 8</option>
        </Select>
        <br />


        <ValidatingInputField 
            name={"officeLocation"}
            label={"Office Location"} 
            value={employeeObject.officeLocation} 
            changeValue={changeValue} 
            validate={(value) => !/\d/.test(value) && value !== ""}
            errorMessage={"Please only use alphanumeric characters"}
            validInput={changeValidInput}
            />
        <br />

        <ValidatingInputField 
            name={"positions"}
            label={"Position"} 
            value={employeeObject.position} 
            changeValue={changeValue} 
            validate={(value) => !/\d/.test(value) && value !== ""  }
            errorMessage={"Please only use alphabet characters"}
            validInput={changeValidInput}
            />

        <br />
        <Select  label="User Type"
        name="userType"
        value={employeeObject.userType}
        onChange={(e) =>
          setEmployeeObject({
            ...employeeObject,
            userType: parseInt(e.target.value,10),
          })
        }>
          <option value={null}>Please choose a user type</option>
          <option value="admin">Admin</option>
          <option value="manager">Manger</option>
          <option value="employee">Employee</option>
        </Select>
        <br />

        <ValidatingInputField 
            name={"manager"}
            label={"Manager (ID)"} 
            value={employeeObject.manager} 
            changeValue={changeValue} 
            validate={(value) => !/\D/.test(value) && value !== ""}
            errorMessage={"Please write manager's ID (numeric)"}
            validInput={changeValidInput}
            />
        <br />
      </Fieldset>
      </form>
  )
}
