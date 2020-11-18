import React, { useState, useEffect } from "react";

import InputField from "@govuk-react/input-field";
import Fieldset from "@govuk-react/fieldset";
import DateField from "@govuk-react/date-field";

function CreateEmployeeForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div>
      <form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </form>
      <Fieldset>
        <Fieldset.Legend>
          <b>Personal Information</b>
        </Fieldset.Legend>
        <InputField
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        >
          First name
        </InputField>
        <br />
        <InputField
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        >
          Last name
        </InputField>
        <br />
      </Fieldset>
      <button
        onClick={() =>
          window.alert(
            `Clicked "Edit" for row ${firstName} with dataIndex of ${lastName}`
          )
        }
      >
        Edit
      </button>
    </div>
  );
}

export default CreateEmployeeForm;
