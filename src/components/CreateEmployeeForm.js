import React, { useState, useEffect } from "react";

import InputField from "@govuk-react/input-field";
import Fieldset from "@govuk-react/fieldset";
import DateField from "@govuk-react/date-field";
import Button from "@govuk-react/button";
import Select from '@govuk-react/select';

import CreateForm from "./CreateEmployee/CreateForm"
import ReviewForm from "./CreateEmployee/ReviewForm"

const emptyEmployeeObject = {
  "firstName": null,
  "lastName": null,
  "email": null,
  "mobileNumber": null,
  "address": null,
  "city": null,
  "postcode": null,
  "nextOfKinName": null,
  "nextOfKinContactNumber": null,
  "salaryBand": null,
  "officeLocation": null,
  "position": null,
  "userType": null,
  "manager": null,
};

function CreateEmployeeForm({ sendToBackend }) {
  const [employeeObject, setEmployeeObject] = useState(emptyEmployeeObject);
  const [formState, setFormState] = useState("create")


  return ( <div>
    {formState === "create" && <CreateForm employeeObject={employeeObject} setEmployeeObject={setEmployeeObject} />}
    {formState === "review" && <ReviewForm employeeObject={employeeObject} setEmployeeObject={setEmployeeObject} />}
    <br />
      <Button onClick={() => setFormState("review")}>
        Review and confirm
      </Button>
      </div>
    
  );
}

export default CreateEmployeeForm;
