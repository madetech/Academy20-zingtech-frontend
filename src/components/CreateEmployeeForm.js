import React, { useState, useEffect } from "react";

import InputField from "@govuk-react/input-field";
import Fieldset from "@govuk-react/fieldset";
import DateField from "@govuk-react/date-field";
import Button from "@govuk-react/button";

const emptyEmployeeObject = {
  firstName: null,
  lastName: null
}

function CreateEmployeeForm() {
  const [employeeObject, setEmployeeObject] = useState(emptyEmployeeObject);

  return (
    <div>
      <Fieldset id="employeeInformation">
        <Fieldset.Legend>
          <b>Employee Information</b>
        </Fieldset.Legend>
        <InputField
          name="firstName"
          value={employeeObject.firstName}
          onChange={(e) => setEmployeeObject({...employeeObject, firstName:e.target.value})}
        >
          First name
        </InputField>
        <br />
        <InputField
          name="lastName"
          value={employeeObject.lastName}
          onChange={(e) => setEmployeeObject({...employeeObject, lastName:e.target.value})}
        >
          Last name
        </InputField>
        <br />
      </Fieldset>
      <Button
        onClick={() =>
          window.alert(
            `Clicked "Edit" for row ${employeeObject.firstName} with dataIndex of ${employeeObject.lastName}`
          )
        }
      >
        Create Employee
      </Button>
    </div>
  );
}

export default CreateEmployeeForm;
